const userService = require('../services/user');

const createUser = async (req, res, next) => {
  try {
    await userService.createOne(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};
