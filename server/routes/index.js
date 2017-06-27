'use strict';
const { Router } = require('express');
const seo = require('./seo');

const router = Router();

router.use(seo);

module.exports = router;
