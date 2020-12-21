const userService = require('../services/user');

const createUser = async (req, res, next) => {
  try {
    await userService.createOne(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};
// const createUser = async (req, res, next) => {
//   try {
//     const data = await userService.getCoins(req.body);
//     res.status(200).json(data);
//   } catch (error) {
//     next(error);
//   }
// };

const generateToken = (req, res) => {
  const token = userService.generateToken(req.user);
  res.status(200).json({ token });
};

const addCoin = async (req, res, next) => {
  try {
    await userService.addCoin(req.userRegistered, req.coin);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

const getTopCoins = async (req, res, next) => {
  try {
    const coinsDetail = await userService.getTopCoins(req.userRegistered.username);
    res.status(200).send(coinsDetail);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  generateToken,
  addCoin,
  getTopCoins,
};
