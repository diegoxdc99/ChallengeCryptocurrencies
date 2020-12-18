const express = require('express');
const config = require('./config');
const loadersPromise = require('./loaders');

const app = express();

async function startServer() {
  await loadersPromise(app);
  app.listen(config.api.port, () => {
    console.log(`Server started on the port ${config.api.port}`);
  });
}

startServer();

module.exports = app;
