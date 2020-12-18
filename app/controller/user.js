const { serverError } = require('../helpers/error');

const createUser = async (req, res, next) => {
  try {
    res.status(201).send('user created successfully');
  } catch (error) {
    next(serverError(500, error.message));
  }
};

module.exports = {
  createUser,
};
