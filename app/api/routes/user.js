const express = require('express');

const { user } = require('../../controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/users', route);

  route.post('/', user.createUser);
};
