#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');
const colours = require('colours');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'path', alias: 'p', type: String },
  { name: 'config', alias: 'c', type: String, defaultOption: '../config.json' }
]

const options = commandLineArgs(optionDefinitions);

if (!options.path) {
  console.log('please provide a path to the template');
  process.exit();
}

const cfgOption = options.config || './config.json';

const config = require(cfgOption);

const { bootChecks, checks } = require('./checks');

bootChecks(config);

fs.readFile(options.path, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    exec(`cfn-flip -j ${ options.path }`, (err, flipped) => {
      if (err) {
        console.log(err);
        return 
      }
      /*fs.writeFile("./samples/json.json", flipped, function(err) {
          if(err) {
            return console.log(err);
        }    
      });*/
      const json = JSON.parse(flipped);
      checks.forEach((check,index )=> { 
        let result = check(json);
        if (result && result.message) {
          console.log('INVALID TEMPLATE');
          console.log(result.message.red);
        }        
      });  
    });
  });
