'use strict';
const request = require('request');
const seoChecker = require('../lib/seoChecker');
const { getWPTData } = require('../lib/wptHelper');

const urlController = {
  get: (req, res) => {
    const url = req.params.url;
    request(url, (err, response, body) =>  {
      getWPTData(url)
      .then((results) => {
        let wptData = results.average.firstView;
        res.status(200).json({
          testedUrl: url,
          seoData: seoChecker.parseDocument(body),
          wptData: {
            'TTFB': `${wptData.TTFB}ms`,
            'Speed Index': `${wptData.SpeedIndex}`,
            'Page Size': `${Math.round(wptData.bytesInDoc/1024)}kb`
          }
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err
        })
      })
    });
  }
};

module.exports = urlController;
