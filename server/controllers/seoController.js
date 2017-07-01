'use strict';


const seoController = {
  post: (req, res) => {
    res.status(200).json({
      message: 'route works'
    });
  }
};

module.exports = seoController;
