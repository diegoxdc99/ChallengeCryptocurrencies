module.exports = {
  '/users': {
    post: {
      tags: ['Users'],
      summary: 'Create a users',
      operationId: 'createUser',
      requestBody: {
        description: 'Users creation body',
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/newUser',
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Create user success',
        },
        400: {
          $ref: '#/components/responses/badRequest',
        },
        409: {
          $ref: '#/components/responses/conflictRequest',
        },
        500: {
          $ref: '#/components/responses/defaultError',
        },

      },
    },
  },
  '/users/login': {
    post: {
      tags: ['Users'],
      summary: 'Login user to get a token',
      operationId: 'generateToken',
      security: {
        $ref: '#/components/schemas/basicAuth',
      },
      responses: {
        200: {
          $ref: '#/components/responses/loginResponse',
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
  '/users/coins/{coinId}': {
    post: {
      tags: ['Users'],
      summary: 'Assign a coin to a user',
      operationId: 'addCoin',
      security: [
        {
          bearer: [],
        },
      ],
      parameters: [
        { $ref: '#/components/parameters/id' },
      ],
      responses: {
        201: {
          description: 'Create user success',
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
