const { User } = require('../models');
const { Coins } = require('../models');

const createOne = (userFields) => User.create(userFields);
const findOne = (query) => User.findOne(query);

const getCoins = (username) => User.findAll({
  where: { username },
  attributes: [],
  include: {
    model: Coins,
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
