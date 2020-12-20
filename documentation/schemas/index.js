const users = require('./users');
const error = require('./errors');

module.exports = {
  ...error,
  ...users,
};
