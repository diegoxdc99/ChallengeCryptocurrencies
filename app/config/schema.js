module.exports = {
  environment: { doc: 'Environment', default: 'development', format: String },
  api: {
    port: { doc: 'API port', default: 8080, format: 'port' },
  },
};
