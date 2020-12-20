const convict = require('convict');

const configSchema = require('./schema');
const { assignObject } = require('../utils/object');
require('dotenv').config();

const ENVIRONMENT = process.env.NODE_ENV;
const configFile = `./${ENVIRONMENT}/`;
// eslint-disable-next-line import/no-dynamic-require
const customConfig = require(configFile).config;

const loadConfig = (configLoad) => {
  const convictConfig = convict(configSchema);
  convictConfig.load(configLoad).validate();
  return convictConfig.getProperties();
};

const config = {
  environment: process.env.ENVIRONMENT,
  api: {
    port: process.env.PORT,
  },
  database: {
    username: process.env.DB_USERNAMEDB,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  auth: {
    secret: process.env.JWT_SECRET,
    algorithms: [process.env.JWT_ALGORITHM],
  },
  coin: {
    url: process.env.COIN_BASE_URL,
  },
};

const environmentConfig = assignObject(config, customConfig);

module.exports = loadConfig(environmentConfig);
