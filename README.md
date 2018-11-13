## CLOUDCHECK

A package for checking validity of AWS SAM templates. Tools exist to validate these templates on a basic level (YAML format etc) but typos in property names etc are costly as they are easily missed and you won't know until stack build time.

You can see how wanting the basic tools are:

* ```aws cloudformation validate-template --template-body file://template-invalid-lambda-type.yml```
* ```sam validate -t samples/invalid/template-invalid-lambda-type.yml```

...which both report the template with an invalid property name as being invalid.

The package does a number of things so far:

* Checks the ```Properties``` section for each resource to ensure the property names are valid.
* Check the ```Properties``` section for each resource to ensure any required properties are present.

### CONFIGURATION

The codebase comes with a ```config.json``` file that specifies patterns to extract AWS resources according to a naming convention. If you want to supply your own config, supply that as the second argument to the command, for example:

```npm run check <template> <config_path>```

#### SETUP

* Install [cfn-flip](https://github.com/awslabs/aws-cfn-template-flip) which is a Python command that flips a YAML template into a JSON version.
* Run ```npm install```.

#### TEST PAYLOADS (EXAMPLES)

* ```npm run check samples/invalid/template-invalid-transform.json```
* ```npm run check samples/valid/template.yml```
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

### SUPPORTED AWS RESOURCES

#### SAM RESOURCES

* ```AWS::Serverless::Api```
* ```AWS::Serverless::SimpleTable```
* ```AWS::Serverless::Function```

#### CLOUDFORMATION RESOURCES

* ```AWS::SQS::Queue```
* ```AWS::CloudWatch::Alarm```

#### TODO

* Extend support to other AWS resource types
* Add tests
