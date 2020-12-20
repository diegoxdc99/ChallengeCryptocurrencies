exports.token = {
  type: 'string',
  example: 'aaaaaaaaaaa.bbbbbbbbbbbbb.cccccccccccc',
};

const newUser = {
  firstName: {
    type: 'string',
    example: 'Pedrito',
    required: true,
  },
  lastName: {
    type: 'string',
    example: 'Clavito',
    required: true,
  },
  username: {
    type: 'string',
    example: 'pedrito20',
    required: true,
  },
  password: {
    type: 'string',
    example: '12345678',
    required: true,
  },
  currency: {
    type: 'string',
    example: 'usd',
    required: true,
  },
};

module.exports = {
  token: {
    type: 'object',
    properties: {
      token: exports.token,
    },
  },
  basicAuth: {
    type: 'http',
    scheme: 'basic',
  },
  newUser: {
    type: 'object',
    properties: newUser,
  },
};
