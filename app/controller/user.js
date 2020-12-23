const userService = require('../services/user');
const { logger } = require('../logger');

const createUser = async (req, res, next) => {
  try {
    logger.info('Creating a user');
    await userService.createOne(req.body);
    res.sendStatus(201);
  } catch (error) {
    logger.info(`Error creating user: error: ${error}`);
    next(error);
  }
};

const generateToken = (req, res) => {
  const token = userService.generateToken(req.user);
  res.status(200).json({ token });
};

const addCoin = async (req, res, next) => {
  try {
    await userService.addCoin(req.userRegistered, req.coin);
    res.sendStatus(201);
  } catch (error) {
    logger.info(`Error associating currency to a user: error: ${error}`);
    next(error);
  }
};

const getTopCoins = async (req, res, next) => {
  logger.info('Getting the top coins of a user');
  try {
    const coinsDetail = await userService.getTopCoins(req.userRegistered.username, {
      limit: req.query.limit,
      order: req.query.order,
    });
    res.status(200).send(coinsDetail);
  } catch (error) {
    logger.info(`Error getting the top coins of a user: error: ${error}`);
    next(error);
  }
};

module.exports = {
  createUser,
  generateToken,
  addCoin,
  getTopCoins,
};
