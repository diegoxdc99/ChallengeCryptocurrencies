const config = require('../app/config');
const paths = require('./paths');
const responses = require('./responses');
const schemas = require('./schemas');
const parameters = require('./parameters');

const port = config.api.port || 8080;

module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'challengecryptocurrencies',
    description: 'Solución del reto el cuál es un wrapper de CoinGecko',
  },
  servers: [
    {
      url: `http://localhost:${port}/`,
      description: 'Local server',
    },
  ],
  security: [],
  tags: [
    { name: 'Users', description: 'Internal endpoints for users' },
    { name: 'Users', description: 'Internal endpoints for coins' },
  ],
  paths,
  components: {
    schemas,
    responses,
    parameters,
    securitySchemes: {
      bearer: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};
