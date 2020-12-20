module.exports = {
  getAllCoins: {
    description: 'Get a list of available coins',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/getAllCoins',
        },
      },
    },
  },
};
