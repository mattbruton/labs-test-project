'use strict';
const cheerio = require('cheerio');

const seoChecker = {
  parseDocument(html) {
    const tests = [this.checkForTitleLength, this.checkMetaDescLenth, this.checkForSingleHeadingTag];
    const results = [];
    tests.forEach((test) => {
        results.push(test(html));
    });
    return results;
  },
  checkForTitleLength(html) {
    const $ = cheerio.load(html);
    const title = $('title').text();
    return {
      test: 'Title Length',
      passed: title && title.length <= 55 ? true : false,
      tip: 'Titles should be 55 characters or less in length.'
    }
  },
  checkMetaDescLenth(html) {
    const $ = cheerio.load(html);
    const meta = $('meta[name="description"]').attr('content');
    return {
      test: 'Meta Description',
      passed: meta && meta.length >= 135 && meta.length <= 160 ? true : false,
      tip: 'A good description is between 135-160 characters in length.'
    }
  },
  checkForSingleHeadingTag(html) {
    const $ = cheerio.load(html);
    const headings = $('html').find('h1').length;
    return {
      test: 'Single H1 Element',
      passed: headings && headings === 1 ? true : false,
      tip: 'This test will fail if the page contains more or less than one H1 element.'
    }
  }
}

module.exports = seoChecker;
