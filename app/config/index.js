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
};

const environmentConfig = assignObject(config, customConfig);

module.exports = loadConfig(environmentConfig);
