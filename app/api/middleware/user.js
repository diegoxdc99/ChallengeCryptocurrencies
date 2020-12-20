const { resourceNotFound } = require('../../helpers/error');
const { TYPES } = require('../../constants/resource');
const userService = require('../../services/user');

// eslint-disable-next-line consistent-return
const getUserToken = async (req, res, next) => {
  try {
    const user = await userService.getById(req.user.id);
    if (!user) return next(resourceNotFound(TYPES.user));

    req.userRegistered = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserToken,
};
