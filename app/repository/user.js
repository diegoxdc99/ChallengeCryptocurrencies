const { User } = require('../models');

const createOne = (userFields) => User.create(userFields);

module.exports = {
  createOne,
};
