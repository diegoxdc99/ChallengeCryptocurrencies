const userService = require('../services/user');

const createUser = async (req, res, next) => {
  try {
    await userService.createOne(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

const generateToken = (req, res) => {
  const token = userService.generateToken(req.user);
  res.status(200).json({ token });
};

module.exports = {
  createUser,
  generateToken,
};
