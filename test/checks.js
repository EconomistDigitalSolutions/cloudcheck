const  assert = require('assert');
const {
  checkTransform,
  checkLambda 
}  = require('../checks');
console.log(typeof checks)
describe('Checks', function() {
  describe('transform', function() {
    const template = require('../samples/invalid/template-invalid-transform.json');
    it('returns an error given an invalid transform', function() {
        const result = checkTransform(template);
        assert.equal('Transform header does not equal AWS::Serverless-2016-10-31', result.message);
    });
  });
  describe('lambda', function() {
    const template = require('../samples/invalid/template-invalid-lambda-type.json');
    it('returns an error given an invalid lambda type', function() {
        const result = checkLambda(template);
        assert.equal('Invalid lambda type', result.message);
    });
  });
});
