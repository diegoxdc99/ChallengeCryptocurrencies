const { User } = require('../models');

const createOne = (userFields) => User.create(userFields);
const getByUsername = (query) => User.findOne(query);

module.exports = {
  createOne,
  getByUsername,
};
