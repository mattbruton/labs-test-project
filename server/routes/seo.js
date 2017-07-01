'use strict';

const { Router } = require('express');
const { post } = require('../controllers/seoController');

const router = Router();

router.post('/seo/test', post);

module.exports = router;
