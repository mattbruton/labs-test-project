'use strict';
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

module.exports = app;
