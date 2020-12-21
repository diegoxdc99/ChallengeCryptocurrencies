const createError = (code, message) => ({
  message: {
    type: 'string',
    example: message,
  },
  status: {
    type: 'string',
    example: 'error',
  },
  statusCode: {
    type: 'integer',
    example: code,
  },
});

module.exports = {
  defaultError: {
    type: 'object',
    properties: createError(500, 'Internal Error'),
  },
  badRequest: {
    type: 'object',
    properties: createError(400, 'FirstName is required'),
  },
  conflictRequest: {
    type: 'object',
    properties: createError(409, 'Field username must by unique'),
  },
  unauthorized: {
    type: 'object',
    properties: createError(401, 'Unauthorized'),
  },
};
