class GeneralError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const mapGeneralErrorResponse = (error) => ({
  statusCode: error.statusCode,
});

const mapUnauthorizedErrorResponse = (error) => ({
  statusCode: error.status,
});

const mapDefaultErrorResponse = () => ({
  statusCode: 500,
});

const mappingInstanceErrors = {
  GeneralError: mapGeneralErrorResponse,
  UnauthorizedError: mapUnauthorizedErrorResponse,
  DefaultError: mapDefaultErrorResponse,
  DatabaseError: mapDefaultErrorResponse,
};

const handleError = (err, res) => {
  const { message } = err;
  const { statusCode } = (mappingInstanceErrors[err.constructor.name]
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
