const { User } = require('../models');
const { Coin } = require('../models');

const createOne = (userFields) => User.create(userFields);
const findOne = (query) => User.findOne(query);

const getCoins = (username) => User.findOne({
  where: { username },
  include: {
    model: Coin,
    through: {
      attributes: [],
    },
  },
});

const addCoin = (user, coin) => user.addCoin(coin);

module.exports = {
  createOne,
  findOne,
  getCoins,
  addCoin,
};
