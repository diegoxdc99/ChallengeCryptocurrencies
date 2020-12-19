const express = require('express');
const validator = require('express-joi-validation').createValidator({ passError: true });
const { newUser } = require('../schemas/user');

const { user } = require('../../controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/users', route);

  route.post('/', validator.body(newUser), user.createUser);
};
