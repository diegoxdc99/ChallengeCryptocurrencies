const { serverError } = require('../helpers/error');

const createUser = async (req, res, next) => {
  try {
    throw new Error('asdasd');
    res.sendStatus(201);
  } catch (error) {
    next(serverError(500, error.message));
  }
};

module.exports = {
  createUser,
};
