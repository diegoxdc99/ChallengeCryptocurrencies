module.exports = {
  id: {
    name: 'coinId',
    in: 'path',
    description: 'Id of the currency to add to the user',
    schema: {
      $ref: '#/components/schemas/id',
    },
    required: true,
  },
  limitTopCoins: {
    name: 'limit',
    in: 'query',
    description: 'upper limit of coins',
    schema: {
      $ref: '#/components/schemas/topCoins',
    },
    required: true,
  },
  order: {
    name: 'order',
    in: 'query',
    description: 'Method to sort the results, by default descending',
    schema: {
      $ref: '#/components/schemas/order',
    },
    required: true,
  },
};
