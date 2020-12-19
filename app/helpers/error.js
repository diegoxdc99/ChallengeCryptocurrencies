class GeneralError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

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

const mappingInstanceErrors = {
  GeneralError: mapGeneralErrorResponse,
  UnauthorizedError: mapUnauthorizedErrorResponse,
  DefaultError: mapDefaultErrorResponse,
  DatabaseError: mapDefaultErrorResponse,
  UniqueConstraintError: mapUniqueConstraintErrorResponse,
};

const handleError = (err, res) => {
  const { statusCode, message } = (mappingInstanceErrors[err.constructor.name]
      && mappingInstanceErrors[err.constructor.name](err))
    || mappingInstanceErrors.DefaultError(err);

  res.status(statusCode).json({
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
