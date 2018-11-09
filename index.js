const fs = require('fs');
const { exec } = require('child_process');

let path = process.argv[2];
   
if (!path) throw new Error('provide path to yaml file');

const { checks } = require('./checks');

fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    exec(`cfn-flip -j ${ path }`, (err, flipped) => {
      if (err) {
        console.log(err);
        return 
      }
      const json = JSON.parse(flipped);
      checks.forEach((check,index )=> { 
        let result = check(json);
        if (result.message) {
            console.log('INVALID TEMPLATE');
            console.log(result.message);
        } 
      })  
    });
  });

  


 
