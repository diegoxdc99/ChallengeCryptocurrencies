module.exports = {
  '/coins': {
    get: {
      tags: ['Coins'],
      summary: 'get all available coins',
      operationId: 'getAll',
      security: [
        {
          bearer: [],
        },
      ],
      responses: {
        200: {
          $ref: '#/components/responses/getAllCoins',
        },
        500: {
          $ref: '#/components/responses/defaultError',
        },
      },
    },
  },
};
