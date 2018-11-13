const  assert = require('assert');
const checks = require('../checks');
console.dir(checks);
console.log(typeof checks)
describe('Checks', function() {
  describe('transform', function() {
    const template = require('../samples/invalid/template-invalid-transform.json');
    it('returns an error given an invalid transform', function() {
        const result = checks[0](template);
        assert.equal('Transform header does not equal AWS::Serverless-2016-10-31', result.message);
    });
  });
});
