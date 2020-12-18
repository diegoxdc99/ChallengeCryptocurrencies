const bodyParser = require('body-parser');
const helmet = require('helmet');
const routes = require('../api');
const { handleError } = require('../helpers/error');

module.exports = async (app) => {
  app.use(helmet());
  app.use(bodyParser.json());
  app.use('/', routes());

  app.get('/health', (req, res) => {
    res.status(200).end();
  });
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    handleError(err, res);
  });
};
