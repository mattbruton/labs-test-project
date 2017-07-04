'use strict';
const { Router } = require('express');
const { get } = require('../controllers/urlController');

const router = Router();

router.get('/testUrl/:url', get);

module.exports = router;
