const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Coin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Coin.belongsToMany(models.User, { through: 'Users_Coins' });
    }
  }
  Coin.init({
    key: DataTypes.STRING,
    symbol: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Coin',
  });
  return Coin;
};
