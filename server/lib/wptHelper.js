'use strict';
const WebPageTest = require('webpagetest');
const wpt = WebPageTest('www.webpagetest.org', process.env.WEBPAGETEST_ID);

const wptHelper = {
  getWPTData: (url) => {
    return new Promise((resolve, reject) => {
      wpt.runTest(url, { location: 'Dulles_IE11', pollResults: 5}, (err, data) => {
        resolve(data.data);
        reject(err);
      });
    })
  }
}

module.exports = wptHelper;
