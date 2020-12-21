module.exports = {
  id: {
    type: 'integer',
    minimum: 1,
  },
  topCoins: {
    type: 'integer',
    minimum: 1,
    maximum: 25,
  },
  order: {
    type: 'string',
    enum: ['asc', 'desc'],
  },
};
