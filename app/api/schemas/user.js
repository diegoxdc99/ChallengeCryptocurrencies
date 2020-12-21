const Joi = require('joi');
const { ORDER } = require('../../constants/order');

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

const topCoins = Joi.object().keys({
  limit: Joi.number().min(1).max(25)
    .required(),
  order: Joi.string().valid(ORDER.asc, ORDER.desc).optional().default(ORDER.desc),
});

module.exports = {
  newUser,
  topCoins,
};
