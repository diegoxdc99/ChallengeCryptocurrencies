module.exports = {
  defaultError: {
    description: 'Internal Server Error',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/defaultError',
        },
      },
    },
  },
  unauthorized: {
    description: 'Request unauthorized',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/defaultError',
        },
      },
    },
  },
  badRequest: {
    description: 'The application does not have the necessary information',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/badRequest',
        },
      },
    },
  },
  conflictRequest: {
    description: 'The resource already exists in the system',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/conflictRequest',
        },
      },
    },
  },
};
