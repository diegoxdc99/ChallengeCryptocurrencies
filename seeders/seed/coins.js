const date = new Date();

const coins = [
  {
    key: 'bitcoin',
    symbol: 'btc',
    name: 'bitcoin',
    createdAt: date,
    updatedAt: date,
  },
  {
    key: 'ethereum',
    symbol: 'eth',
    name: 'ethereum',
    createdAt: date,
    updatedAt: date,
  },
  {
    key: 'litecoin',
    symbol: 'ltc',
    name: 'litecoin',
    createdAt: date,
    updatedAt: date,
  },
];

module.exports = {
  coins,
};
