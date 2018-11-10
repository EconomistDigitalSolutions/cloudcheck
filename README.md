## CLOUDCHECK

A package for checking validity of Content Platform SAM and CloudFormation templates. We have
pre-commit hook checks to validate these templates on a basic level (YAML format etc) but typos in property names etc are costly as they are
easily missed and you won't know until stack build time.

#### SETUP

* Install [cfn-flip](https://github.com/awslabs/aws-cfn-template-flip) which is a Python command that flips a YAML template into a JSON version.
* Run ```npm install```.

#### TEST PAYLOADS

* ```npm run check samples/valid/template.yml```
* ```npm run check samples/invalid/template-invalid-mappings.json```
* ```npm run check samples/invalid/template-invalid-sqs-prop1.yml```
* ```npm run check samples/invalid/template-invalid-sqs-prop2.yml```
* ```npm run check samples/invalid/template-invalid-sqs-type.yml```

#### TODO

* Extend support to other AWS resource types.
* Add tests.
* Add as a pre-commit hook.