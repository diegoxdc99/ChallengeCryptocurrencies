const bodyParser = require('body-parser');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');

const routes = require('../api');
const documentation = require('../../documentation');
const { handleError } = require('../helpers/error');

module.exports = async (app) => {
  app.use(helmet());
  app.use(bodyParser.json());
  app.use('/', routes());
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentation));
  app.get('/health', (req, res) => {
    res.status(200).end();
  });
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    handleError(err, res);
  });
};
