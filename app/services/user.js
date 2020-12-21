const userRepository = require('../repository/user');
const jwt = require('../helpers/jwt');
const config = require('../config');

const createOne = async (userFields) => userRepository.createOne(userFields);
const getByUsername = (username) => userRepository.findOne({
  where: { username },
});
const getById = (id) => userRepository.findOne({
  where: { id },
});

const generateToken = (user) => jwt.sign({
  username: user.username,
  id: user.id,
}, config.auth.secret);

const getCoins = (username) => userRepository.getCoins(username);

const addCoin = (user, coin) => userRepository.addCoin(user, coin);

module.exports = {
  createOne,
  getByUsername,
  generateToken,
  getById,
  getCoins,
  addCoin,
};
