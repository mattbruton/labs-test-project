'use strict';
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);
app.use('/', express.static(path.join(__dirname, '../dist')));


module.exports = app;
