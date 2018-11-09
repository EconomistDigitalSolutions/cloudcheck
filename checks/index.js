const _ = require('lodash');
const diff = require('diff');
const fs = require('fs');
const colours = require('colours');

const config = require('../config.json');

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

const checkTransform = (json) => {
  const HeaderTransform = 'AWS::Serverless-2016-10-31';
  const { Transform } = json;
  const result = { message: `Transform header does not equal ${ HeaderTransform }` }
  return Transform != HeaderTransform ? result : {}
}

const checks = [checkTransform, checkMappings];

module.exports = { checks };
