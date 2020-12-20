const users = require('./users');
const coins = require('./coins');

module.exports = { ...users, ...coins };
