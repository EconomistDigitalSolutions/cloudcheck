const _ = require('lodash');
const diff = require('diff');
const fs = require('fs');

const types = require('./types');

let config = {};

const bootChecks = (file) => {
  config = file;
}

const checkTransform = (json) => {
  const HeaderTransform = 'AWS::Serverless-2016-10-31';
  const { Transform } = json;
  const result = { message: `Transform header does not equal ${ HeaderTransform }` }
  return Transform != HeaderTransform ? result : {}
}

const checkSQS = (json) => {
  const { SQS } = config.resourcePatterns;
  const pattern = new RegExp(SQS);
  return runChecks('sqs', SQS, pattern, json) || {};  
}

const checkCloudWatch = (json) => {
  const { CloudWatch } = config.resourcePatterns;
  const pattern = new RegExp(CloudWatch);
  return runChecks('cloudwatch', CloudWatch, pattern, json) || {}; 
}

const checkLambda = (json) => {
  const { Lambda } = config.resourcePatterns;
  const pattern = new RegExp(Lambda);
  return runChecks('lambda', Lambda, pattern, json) || {}; 
}

const checkSimpleTable = (json) => {
  const { SimpleTable } = config.resourcePatterns;
  const pattern = new RegExp(SimpleTable);
  return runChecks('simpleTable', SimpleTable, pattern, json) || {}; 
}

const checkAPI = (json) => {
  const { API } = config.resourcePatterns;
  const pattern = new RegExp(API);
  return runChecks('api', API, pattern, json) || {}; 
}

const runChecks = (name, resource, pattern, json) => {
  const { Resources } = json;
  let filteredNames = [];
  Object.keys(Resources).forEach((key, val) => {
    if(pattern.test(key)) {
      filteredNames.push(key);
    }
  })
  if (filteredNames.length > 0) {
    if (!checkType(name, filteredNames, Resources)) {
      return { message: `Invalid ${ name } type`};
    }
    cp = checkProps(name, filteredNames, Resources);
    if (typeof cp !== null) {
      return cp;
    }
  }
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
  let result = null;
  const { props, required } = types[resource];
  names.forEach((key, val) => {
    const keys = Object.keys(resources[key].Properties);
    keys.forEach((key, val) => {
      if (!_.includes(props, key)) {
        result = { message: `Invalid ${ resource } key: ${ key }`};
      }
    });
    if (result && result.message) return result;
    const is = _.intersectionWith(keys, required, _.isEqual);
    if (is.length != required.length) {
        console.log('field supplied in template:');
        console.log(is);
        console.log('required fields:');
        console.log(required);
        result = { message: `Missing required ${ resource } keys`};
    }
  });
  return result;
} 

const checks = [
  checkTransform,
  checkSQS,
  checkCloudWatch,
  checkLambda,
  checkSimpleTable,
  checkAPI
];

module.exports = {
  checkTransform,
  checkLambda,
  checks,
  bootChecks
};
