module.exports = {
  '/users': {
    post: {
      tags: ['Users'],
      summary: 'Create a users',
      operationId: 'createUser',
      responses: {
        201: {
          description: 'Create user success',
        },
        400: {
          $ref: '#/components/responses/defaultError',
        },
        409: {
          $ref: '#/components/responses/defaultError',
        },
        500: {
          $ref: '#/components/responses/defaultError',
        },

      },
    },
  },
};
