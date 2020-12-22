const coins = [
  {
    id: 1,
    key: 'bitcoin',
    symbol: 'btc',
    name: 'bitcoin',
    createdAt: '2020-12-20T23:08:03.000Z',
    updatedAt: '2020-12-20T23:08:03.000Z',
  },
  {
    id: 2,
    key: 'ethereum',
    symbol: 'eth',
    name: 'ethereum',
    createdAt: '2020-12-20T23:08:03.000Z',
    updatedAt: '2020-12-20T23:08:03.000Z',
  },
  {
    id: 3,
    key: 'litecoin',
    symbol: 'ltc',
    name: 'litecoin',
    createdAt: '2020-12-20T23:08:03.000Z',
    updatedAt: '2020-12-20T23:08:03.000Z',
  },
  {
    id: 4,
    key: 'litecoin2',
    symbol: 'lt2c',
    name: 'litecoin2',
    createdAt: '2020-12-20T23:08:03.000Z',
    updatedAt: '2020-12-20T23:08:03.000Z',
  },
];

const responseApi = [
  {
    symbol: 'btc',
    name: 'Bitcoin',
    image: {
      thumb: 'www.bitcoin.com',
    },
    market_data: {
      current_price: {
        ars: 10000,
        eur: 10000,
        usd: 10000,
      },
    },
    last_updated: '2020-12-22T00:13:32.828Z',
  },
  {
    symbol: 'eth',
    name: 'ethereum',
    image: {
      thumb: 'www.ethereum.com',
    },
    market_data: {
      current_price: {
        ars: 10000,
        eur: 10000,
        usd: 10000,
      },
    },
    last_updated: '2020-12-22T00:13:32.828Z',
  },
  {
    symbol: 'ltc',
    name: 'litecoin',
    image: {
      thumb: 'www.litecoin.com',
    },
    market_data: {
      current_price: {
        ars: 5000,
        eur: 5000,
        usd: 5000,
      },
    },
    last_updated: '2020-12-22T00:13:32.828Z',
  },
  {
    symbol: 'ltc2',
    name: 'litecoin2',
    image: {
      thumb: 'www.litecoin2.com',
    },
    market_data: {
      current_price: {
        ars: 30000,
        eur: 30000,
        usd: 30000,
      },
    },
    last_updated: '2020-12-22T00:13:32.828Z',
  },
];

module.exports = {
  coins,
  responseApi,
};
