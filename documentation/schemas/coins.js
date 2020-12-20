const coinsAllSchema = {
  type: 'object',
  properties: {
    symbol: {
      type: 'string',
      example: 'btc',
    },
    currentPrice: {
      type: 'integer',
      example: '10000',
    },
    name: {
      type: 'string',
      example: 'Bitcoin',
    },
    image: {
      type: 'string',
      example: 'www.image.com',
    },
    lastUpdated: {
      type: 'string',
      example: '2020-12-20T19:35:12.865Z',
    },
  },
};

module.exports = {
  getAllCoins: {
    type: 'object',
    properties: {
      data: {
        type: 'array',
        items: {
          ...coinsAllSchema,
        },
      },
    },
  },
};
