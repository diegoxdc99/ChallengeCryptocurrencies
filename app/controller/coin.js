const { coinPreferedCurrency } = require('../mappers/coin');
const coinService = require('../services/coin');

const getAll = async (req, res, next) => {
  try {
    const { currency } = req.userRegistered;
    let allCoins = [];
    let coins = {};
    let page = 1;
    do {
      // eslint-disable-next-line no-await-in-loop
      coins = await coinService.getAll(currency, page);
      page += 1;
      allCoins = allCoins.concat(coins.data);
    } while (coins.data.length !== 0);

    const coinsReponse = allCoins.map(coinPreferedCurrency);
    res.status(200).send({ data: coinsReponse });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
