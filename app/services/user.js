const userRepository = require('../repository/user');
const coinService = require('./coin');
const jwt = require('../helpers/jwt');
const config = require('../config');
const { TYPES } = require('../constants/resource');
const { resourceNotFound } = require('../helpers/error');
const { topCoinUser } = require('../mappers/coin');

const checkResources = (user) => {
  if (!user) throw resourceNotFound(TYPES.user);
  if (user.Coins.lenght === 0) throw resourceNotFound(TYPES.coin);
};

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
const getTopCoins = async (username) => {
  const user = await userRepository.getCoins(username);
  checkResources(user);
  const coinsDetailsPromises = user.Coins.map((coin) => coinService.getDetailsCoin(coin.key));
  const coinsDetails = await Promise.all(coinsDetailsPromises);
  const coinsDetailsResponse = coinsDetails.map(topCoinUser);
  return coinsDetailsResponse;
};

module.exports = {
  createOne,
  getByUsername,
  generateToken,
  getById,
  getCoins,
  addCoin,
  getTopCoins,
};
