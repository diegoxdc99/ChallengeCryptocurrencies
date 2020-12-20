const { User } = require('../models');

const createOne = (userFields) => User.create(userFields);
const findOne = (query) => User.findOne(query);

module.exports = {
  createOne,
  findOne,
};
