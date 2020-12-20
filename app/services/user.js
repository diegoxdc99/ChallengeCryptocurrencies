const userRepository = require('../repository/user');
const jwt = require('../helpers/jwt');
const config = require('../config');

const createOne = async (userFields) => userRepository.createOne(userFields);
const getByUsername = async (username) => userRepository.getByUsername({
  where: { username },
});

const generateToken = (user) => jwt.sign({
  username: user.username,
  id: user.id,
}, config.auth.secret);

module.exports = {
  createOne,
  getByUsername,
  generateToken,
};
