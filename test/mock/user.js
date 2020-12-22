const { coins } = require('./coins');

const user = {
  id: 2,
  firstName: 'Pedrito',
  lastName: 'Clavito',
  username: 'pedrito1',
  currency: 'usd',
  createdAt: '2020-12-21T18:45:17.000Z',
  updatedAt: '2020-12-21T18:45:17.000Z',
};

const userWithCoins = {
  ...user,
  Coins: coins,
};

module.exports = {
  user,
  userWithCoins,
};
