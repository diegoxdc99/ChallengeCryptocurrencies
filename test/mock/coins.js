const coins = [
  {
    id: 1,
    key: 'bitcoin',
    symbol: 'btc',
    name: 'bitcoin',
    createdAt: '2020-12-20T23:08:03.000Z',
    updatedAt: '2020-12-20T23:08:03.000Z',
  },
  {
    id: 2,
    key: 'ethereum',
    symbol: 'eth',
    name: 'ethereum',
    createdAt: '2020-12-20T23:08:03.000Z',
    updatedAt: '2020-12-20T23:08:03.000Z',
  },
  {
    id: 3,
    key: 'litecoin',
    symbol: 'ltc',
    name: 'litecoin',
    createdAt: '2020-12-20T23:08:03.000Z',
    updatedAt: '2020-12-20T23:08:03.000Z',
  },
  {
    id: 4,
    key: 'litecoin2',
    symbol: 'lt2c',
    name: 'litecoin2',
    createdAt: '2020-12-20T23:08:03.000Z',
    updatedAt: '2020-12-20T23:08:03.000Z',
  },
];

const responseApi = [
  {
    symbol: 'btc',
    name: 'Bitcoin',
    image: {
      thumb: 'www.bitcoin.com',
    },
    market_data: {
      current_price: {
        ars: 10000,
        eur: 10000,
        usd: 10000,
      },
    },
    last_updated: '2020-12-22T00:13:32.828Z',
  },
  {
    symbol: 'eth',
    name: 'ethereum',
    image: {
      thumb: 'www.ethereum.com',
    },
    market_data: {
      current_price: {
        ars: 10000,
        eur: 10000,
        usd: 10000,
      },
    },
    last_updated: '2020-12-22T00:13:32.828Z',
  },
  {
    symbol: 'ltc',
    name: 'litecoin',
    image: {
      thumb: 'www.litecoin.com',
    },
    market_data: {
      current_price: {
        ars: 5000,
        eur: 5000,
        usd: 5000,
      },
    },
    last_updated: '2020-12-22T00:13:32.828Z',
  },
  {
    symbol: 'ltc2',
    name: 'litecoin2',
    image: {
      thumb: 'www.litecoin2.com',
    },
    market_data: {
      current_price: {
        ars: 30000,
        eur: 30000,
        usd: 30000,
      },
    },
    last_updated: '2020-12-22T00:13:32.828Z',
  },
];

const getAllResponseApi = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 1973300,
    market_cap: 36628157657629,
    market_cap_rank: 1,
    fully_diluted_valuation: 41402104168386,
    total_volume: 3243034828462,
    high_24h: 2002247,
    low_24h: 1864436,
    price_change_24h: 70881,
    price_change_percentage_24h: 3.72582,
    market_cap_change_24h: 1275335170659,
    market_cap_change_percentage_24h: 3.60745,
    circulating_supply: 18578556,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 2010205,
    ath_change_percentage: -2.19616,
    ath_date: '2020-12-20T20:42:21.676Z',
    atl: 1478.98,
    atl_change_percentage: 132833.58778,
    atl_date: '2015-01-14T00:00:00.000Z',
    roi: null,
    last_updated: '2020-12-23T02:37:32.819Z',
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    current_price: 51996,
    market_cap: 5927485401717,
    market_cap_rank: 2,
    fully_diluted_valuation: null,
    total_volume: 1082368407012,
    high_24h: 53153,
    low_24h: 49105,
    price_change_24h: 1242.54,
    price_change_percentage_24h: 2.44818,
    market_cap_change_24h: 153073436290,
    market_cap_change_percentage_24h: 2.65089,
    circulating_supply: 113944714.749,
    total_supply: null,
    max_supply: null,
    ath: 55780,
    ath_change_percentage: -6.98568,
    ath_date: '2020-12-17T16:29:19.687Z',
    atl: 4.1,
    atl_change_percentage: 1263977.70344,
    atl_date: '2015-10-20T00:00:00.000Z',
    roi: {
      times: 34.25193964208158,
      currency: 'btc',
      percentage: 3425.1939642081584,
    },
    last_updated: '2020-12-23T02:35:37.135Z',
  },

];

module.exports = {
  coins,
  responseApi,
  getAllResponseApi,
};
