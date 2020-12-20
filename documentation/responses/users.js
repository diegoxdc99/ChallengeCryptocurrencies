module.exports = {
  loginResponse: {
    description: 'Login successful',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/token',
        },
      },
    },
  },
};
