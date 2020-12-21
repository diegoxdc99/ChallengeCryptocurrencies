const users = require('./users');
const error = require('./errors');
const coins = require('./coins');
const common = require('./common');

module.exports = {
  ...error,
  ...users,
  ...coins,
  ...common,
};
