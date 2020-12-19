const GeneralError = require('./errors/GeneralError');
const JoiError = require('./errors/JoiError');

const mapGeneralErrorResponse = (error) => ({
  statusCode: error.statusCode,
  message: error.message,
});

const mapUnauthorizedErrorResponse = (error) => ({
  statusCode: error.status,
  message: error.message,
});

const mapDefaultErrorResponse = (error) => ({
  statusCode: 500,
  message: error.message,
});

const mapUniqueConstraintErrorResponse = (error) => ({
  statusCode: 409,
  message: `Field ${Object.keys(error.fields)[0]} must by unique`,
});

const mapJoiErrorResponse = (error) => ({
  statusCode: 400,
  message: error.message,
});

const mappingInstanceErrors = {
  GeneralError: mapGeneralErrorResponse,
  UnauthorizedError: mapUnauthorizedErrorResponse,
  DefaultError: mapDefaultErrorResponse,
  DatabaseError: mapDefaultErrorResponse,
  UniqueConstraintError: mapUniqueConstraintErrorResponse,
  JoiError: mapJoiErrorResponse,
};

const handleError = (err, res) => {
  let error = err;
  if (error && error.error && error.error.isJoi) {
    error = new JoiError(400, error.error.message);
  }
  const { statusCode, message } = (mappingInstanceErrors[error.constructor.name]
      && mappingInstanceErrors[error.constructor.name](error))
    || mappingInstanceErrors.DefaultError(error);

  return res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

const serverError = (status, message) => new GeneralError(status, message);

module.exports = {
  serverError,
  handleError,
};
