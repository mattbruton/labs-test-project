const seoChecker = require('../server/lib/seoChecker');
const chai = require('chai');

// sample unit test
const assert = chai.assert;
describe('seoChecker.checkForTitleLength', () => {
  it('should return an object', () => {
    let sampleHtML = '<html></html>';
    let testObj = seoChecker.checkForTitleLength(sampleHtML);
    assert.typeOf(testObj, 'object');
  });
  it(`should have a property named "passed", which should be false if the title is too long.`, () => {
    let sampleHtML = '<html><head><title>Here is a really long title. I have to make it longer than 55 characters so this test will fail.</title></head></html>';
    assert.equal(seoChecker.checkForTitleLength(sampleHtML).passed, false);
  });
  it(`should have a property named "passed", which is false if there is no title.`, () => {
    let sampleHtML = `<html><head></head></html>`;
    assert.equal(seoChecker.checkForTitleLength(sampleHtML).passed, false);
  });
  it(`should have a property named "passed", which is true if the title is between 1-55 characters.`, () => {
    let sampleHtML = '<html><head><title>This should pass</title></head></html>';
    assert.equal(seoChecker.checkForTitleLength(sampleHtML).passed, true);
  });
});
