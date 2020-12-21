const coinRepository = require('../repository/coin');
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

const getDetailsCoin = (coinId) => http.request({
  url: config.coin.url,
  path: `/coins/${coinId}`,
  method: 'get',
  params: {
    ocalization: false,
    tickers: false,
    market_data: true,
    community_data: false,
    developer_data: false,
    sparkline: false,
  },
});

const getCoinById = (id) => coinRepository.findOne({
  where: {
    id,
  },
});

module.exports = {
  getAll,
  getCoinById,
  getDetailsCoin,
};
