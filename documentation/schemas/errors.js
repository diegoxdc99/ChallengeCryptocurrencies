module.exports = {
  defaultError: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        example: 'Internal Error',
      },
      status: {
        type: 'string',
        example: 'error',
      },
      statusCode: {
        type: 'integer',
        example: 500,
      },
    },
  },
};
