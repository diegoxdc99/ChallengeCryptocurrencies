const express = require('express');
const passport = require('passport');
const auth = require('express-jwt');
const validator = require('express-joi-validation').createValidator({ passError: true });
const { newUser } = require('../schemas/user');
const config = require('../../config');
const { user } = require('../../controller');
const { getCoin } = require('../middleware/coin');
const { getUserToken } = require('../middleware/user');

const route = express.Router();

module.exports = (app) => {
  app.use('/users', route);

  route.post('/', validator.body(newUser), user.createUser);
  route.post('/login', passport.authenticate('basic', { session: false }), user.generateToken);
  route.get('/coins', auth(config.auth), getUserToken, user.getTopCoins);
  route.post('/coins/:coinId', auth(config.auth), getCoin, getUserToken, user.addCoin);
};
