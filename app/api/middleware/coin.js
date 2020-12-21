const { resourceNotFound } = require('../../helpers/error');
const { TYPES } = require('../../constants/resource');
const coinService = require('../../services/coin');

// eslint-disable-next-line consistent-return
const getCoin = async (req, res, next) => {
  try {
    const coin = await coinService.getCoinById(req.params.coinId);
    if (!coin) throw resourceNotFound(TYPES.coin);

    req.coin = coin;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCoin,
};
