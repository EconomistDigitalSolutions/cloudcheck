## CLOUDCHECK

A package for checking validity of Content Platform SAM and CloudFormation templates. We have
pre-commit hook checks to validate these templates on a basic level (YAML format etc) but typos in property names etc are costly as they are
easily missed and you won't know until stack build time.

You can see how wanting the basic tools are:

* ```aws cloudformation validate-template --template-body file://template-invalid-lambda-type.yml```
* ```sam validate -t samples/invalid/template-invalid-lambda-type.yml```

...which both report the template with an invalid property name as being invalid.

The package does a number of things so far:

* Checks the ```Mappings``` section to ensure it
matches a structure contained in ```config.json```. This file also indicates patterns used in the provided template to delineate specific AWS resources - currently disabled as not sure of the value right now as mappings differ so widely.
* Checks the ```Properties``` section for each
resource to ensure the property names are valid.
* Check the ```Properties``` section for each resource to ensure any required properties are present.

#### SETUP

* Install [cfn-flip](https://github.com/awslabs/aws-cfn-template-flip) which is a Python command that flips a YAML template into a JSON version.
* Run ```npm install```.

#### TEST PAYLOADS

* ```npm run check samples/invalid/template-invalid-transform.json```
* ```npm run check samples/valid/template.yml```
* ```npm run check samples/invalid/template-invalid-mappings.json```
* ```npm run check samples/invalid/template-invalid-sqs-prop1.yml```
* ```npm run check samples/invalid/template-invalid-sqs-prop2.yml```
* ```npm run check samples/invalid/template-invalid-sqs-type.yml```
* ```npm run check samples/invalid/template-invalid-cloudwatch-prop1.yml```
* ```npm run check samples/invalid/template-invalid-cloudwatch-prop2.yml```
* ```npm run check samples/invalid/template-invalid-cloudwatch-type.yml```
* ```npm run check samples/invalid/template-invalid-lambda-prop1.yml```
* ```npm run check samples/invalid/template-invalid-lambda-prop2.yml```
* ```npm run check samples/invalid/template-invalid-lambda-type.yml```
* ```npm run check samples/invalid/template-invalid-lambda-missing-prop.yml```

#### TODO

* Extend support to other AWS resource types.
* Add tests.
* Add as a pre-commit hook.
* Make the config file location configurable.
