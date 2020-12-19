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
};
