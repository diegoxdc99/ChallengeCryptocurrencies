const { coins } = require('../mock/coins');

const findOne = jest.fn().mockResolvedValue(coins[0]);

module.exports = {
  findOne,
};
