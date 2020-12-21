const { Coin } = require('../models');

const findOne = (query) => Coin.findOne(query);

module.exports = {
  findOne,
};
