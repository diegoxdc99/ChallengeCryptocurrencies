const users = require('./users');
const common = require('./common');
const coins = require('./coins');

module.exports = { ...common, ...users, ...coins };
