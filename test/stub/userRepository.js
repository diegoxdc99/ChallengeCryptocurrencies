const { userWithCoins, user } = require('../mock/user');

const addCoin = jest.fn();
const getCoins = jest.fn().mockResolvedValue(userWithCoins);
const createOne = jest.fn();
const findOne = jest.fn().mockResolvedValue(user);

module.exports = {
  addCoin,
  getCoins,
  createOne,
  findOne,
};
