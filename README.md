## CLOUDCHECK

A package for checking validity of AWS SAM templates. Tools exist to validate these templates on a basic level (YAML format etc) but typos in property names etc are costly as they are easily missed and you won't know until stack build time.

You can see how wanting the basic tools are:

```aws cloudformation validate-template --template-body file://template-invalid-lambda-type.yml```
```sam validate -t samples/invalid/template-invalid-lambda-type.yml```

...which both report the template with an invalid property name as being invalid.

The package does a number of things so far:

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
* Make the config file location configurable.
