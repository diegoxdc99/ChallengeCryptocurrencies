const { coins } = require('./seed/coins');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Coins', coins);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Coins', null, {});
  },
};
