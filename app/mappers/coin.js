const coinPreferedCurrency = (coin) => ({
  symbol: coin.symbol,
  currentPrice: coin.current_price,
  name: coin.name,
  image: coin.image,
  lastUpdated: coin.last_updated,
});

const topCoinUser = (coinDetail) => ({
  symbol: coinDetail.data.symbol,
  current_price: {
    ars: coinDetail.data.market_data.current_price.ars,
    usd: coinDetail.data.market_data.current_price.usd,
    eur: coinDetail.data.market_data.current_price.eur,
  },
  name: coinDetail.data.name,
  image: coinDetail.data.image.thumb,
  lastUpdated: coinDetail.data.last_updated,
});

module.exports = {
  coinPreferedCurrency,
  topCoinUser,
};
