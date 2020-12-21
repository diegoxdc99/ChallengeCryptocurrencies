const userRepository = require('../repository/user');
const coinService = require('./coin');
const jwt = require('../helpers/jwt');
const config = require('../config');
const { TYPES } = require('../constants/resource');
const { resourceNotFound } = require('../helpers/error');
const { topCoinUser } = require('../mappers/coin');
const { ORDER } = require('../constants/order');

const sortAscendant = (currency) => (left, right) => {
  if (left.current_price[currency] === right.current_price[currency]) return 0;
  return (left.current_price[currency] < right.current_price[currency]) ? -1 : 1;
};

const sortDescendant = (currency) => (left, right) => {
  if (left.current_price[currency] === right.current_price[currency]) return 0;
  return (left.current_price[currency] > right.current_price[currency]) ? -1 : 1;
};

const sortCurrency = (currency, order) => ((order === ORDER.asc)
  ? sortAscendant(currency) : sortDescendant(currency));

const checkResources = (user) => {
  if (!user) throw resourceNotFound(TYPES.user);
  if (user.Coins.length === 0) throw resourceNotFound(TYPES.coin);
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
const getTopCoins = async (username, options) => {
  const user = await userRepository.getCoins(username, options);
  checkResources(user);
  const coinsDetailsPromises = user.Coins.map((coin) => coinService.getDetailsCoin(coin.key));
  const coinsDetails = await Promise.all(coinsDetailsPromises);
  let coinsDetailsResponse = coinsDetails.map(topCoinUser);
  coinsDetailsResponse = coinsDetailsResponse.sort(sortCurrency(user.currency, options.order));
  coinsDetailsResponse = coinsDetailsResponse.slice(0, options.limit);
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
