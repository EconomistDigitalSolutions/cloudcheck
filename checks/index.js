const _ = require('lodash');
const diff = require('diff');
const fs = require('fs');
const colours = require('colours');

const config = require('../config.json');
const types = require('./types');

const checkMappings = (json) => {
  const {
    stageMap,
    stageAccount,
    prodMap,
    prodAccount
  } = config;
  const { Mappings } = json;
  const { envMap } = Mappings;
  if (!_.isEqual(envMap[stageAccount], stageMap)) {
      const d = diff.diffChars(JSON.stringify(envMap[stageAcount]), JSON.stringify(stageMap));
      d.forEach(function(part){
        // green for additions, red for deletions
        // grey for common parts
        var color = part.added ? 'green' :
          part.removed ? 'red' : 'grey';
        process.stderr.write(part.value[color]);
      });
      return { message: "Mappings invalid - stage settings are wrong" }
  }
  if (!_.isEqual(envMap[prodAccount], prodMap)) {
    const d = diff.diffChars(JSON.stringify(envMap[prodAccount]), JSON.stringify(prodMap));
    d.forEach(function(part){
      // green for additions, red for deletions
      // grey for common parts
      var color = part.added ? 'green' :
        part.removed ? 'red' : 'grey';
      process.stderr.write(part.value[color]);
    });
    return { message: "Mappings invalid - prod settings are wrong" }
}
  return {};
}

const checkSQS = (json) => {
  const { SQS } = config.resourcePatterns;
  const pattern = new RegExp(SQS);
  const { Resources } = json;
  let filteredNames = [];
  Object.keys(Resources).forEach((key, val) => {
    if(pattern.test(key)) {
      filteredNames.push(key);
    }
  })
  if (filteredNames.length > 0) {
    if (checkType('sqs', filteredNames, Resources)) {
      return { message: 'Invalid SQS type'};
    }
    if (!checkProps('sqs', filteredNames, Resources)) {
      return { message: 'Invalid SQS property'};
    }
  }
  return {};
}

const checkType = (resource, names, resources) => {
  let valid = true;
  names.forEach((key, val) => {
    if (resources[key].Type !== types[resource].Type) {
      valid = false;
    }
  });
  return valid;
}

const checkProps = (resource, names, resources) => {
  let valid = true;
  const { props } = types[resource];
  names.forEach((key, val) => {
    const keys = Object.keys(resources[key].Properties);
    keys.forEach((key, val) => {
      if (!_.includes(props, key)) {
      valid = false;
      }
    });
  });
  return valid;
} 

const checkTransform = (json) => {
  const HeaderTransform = 'AWS::Serverless-2016-10-31';
  const { Transform } = json;
  const result = { message: `Transform header does not equal ${ HeaderTransform }` }
  return Transform != HeaderTransform ? result : {}
}

const checks = [checkTransform, checkMappings, checkSQS];

module.exports = { checks };
