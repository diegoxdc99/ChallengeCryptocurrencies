const { mergeRight } = require('ramda');

const assignObject = (source, target) => mergeRight(source, target);

module.exports = {
  assignObject,
};
