const users = require('./users');
const error = require('./errors');
const coins = require('./coins');

module.exports = {
  ...error,
  ...users,
  ...coins,
};
