const http = require('../utils/http');
const config = require('../config');

const getAll = (currency, page = 1) => http.request({
  url: config.coin.url,
  path: '/coins/markets',
  method: 'get',
  params: {
    vs_currency: currency,
    order: 'market_cap_desc',
    per_page: '250',
    page,
    sparkline: false,
  },
});

module.exports = {
  getAll,
};
