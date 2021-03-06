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
        401: {
          $ref: '#/components/responses/unauthorized',
        },
        500: {
          $ref: '#/components/responses/defaultError',
        },
      },
    },
  },
};
