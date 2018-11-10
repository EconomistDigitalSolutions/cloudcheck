## CLOUDCHECK

A package for checking validity of Content Platform SAM and CloudFormation templates. We have
pre-commit hook checks to validate these templates on a basic level (YAML format etc) but typos in property names etc are costly as they are
easily missed and you won't know until stack build time.

#### SETUP

* Install [cfn-flip] which is a Python command that flips a YAML template into a JSON version.
* Run ```npm install```.

#### TEST PAYLOADS

* ```node index.js samples/valid/template.yml```
* ```node index.js samples/invalid/template-invalid-mappings.json```
* ```node index.js samples/invalid/template-invalid-sqs-prop1.yml```
* ```node index.js samples/invalid/template-invalid-sqs-prop2.yml```
* ```node index.js samples/invalid/template-invalid-sqs-type.yml```

#### TODO

* Extend support to other AWS resource types.
* Add tests.
* Add as a pre-commit hook.