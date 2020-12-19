const Joi = require('joi');

const newUser = Joi.object().keys({
  firstName: Joi.string().alphanum().min(2).max(50)
    .required(),
  lastName: Joi.string().alphanum().min(2).max(50)
    .required(),
  username: Joi.string().alphanum().min(2).max(20)
    .required(),
  password: Joi.string().min(8).required(),
  currency: Joi.string().valid('eur', 'usd', 'ars'),
});

module.exports = {
  newUser,
};
