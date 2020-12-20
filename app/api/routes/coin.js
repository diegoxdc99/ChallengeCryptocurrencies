const express = require('express');
const auth = require('express-jwt');
const config = require('../../config');
const { getAll } = require('../../controller/coin');
const { getUserToken } = require('../middleware/user');

const route = express.Router();

module.exports = (app) => {
  app.use('/coins', route);

  route.get('/', auth(config.auth), getUserToken, getAll);
};
