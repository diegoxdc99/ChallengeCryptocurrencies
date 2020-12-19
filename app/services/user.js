const userRepository = require('../repository/user');

const createOne = async (userFields) => userRepository.createOne(userFields);

module.exports = {
  createOne,
};
