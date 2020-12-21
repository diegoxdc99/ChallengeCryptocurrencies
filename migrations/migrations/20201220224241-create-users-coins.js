module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users_Coins', {
      userId: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      coinId: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Users_Coins');
  },
};
