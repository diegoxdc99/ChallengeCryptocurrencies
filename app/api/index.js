const express = require('express');
const coin = require('./routes/coin');
const users = require('./routes/user');

module.exports = () => {
  const app = express.Router();
  users(app);
  coin(app);
  return app;
};
