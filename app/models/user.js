/* eslint-disable no-param-reassign */
const crypto = require('crypto');
const {
  Model,
} = require('sequelize');

const createHooks = (User) => {
  User.generateSalt = () => crypto.randomBytes(16).toString('base64');
  User.encryptPassword = (plainText, salt) => crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');

  User.prototype.correctPassword = function correctPassword(enteredPassword) {
    const encryptPass = User.encryptPassword(enteredPassword, this.salt());
    return encryptPass === this.password();
  };

  const setSaltAndPassword = (user) => {
    if (user.changed('password')) {
      user.salt = User.generateSalt();
      user.password = User.encryptPassword(user.password(), user.salt());
    }
  };

  User.beforeCreate(setSaltAndPassword);
  User.beforeUpdate(setSaltAndPassword);
};

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      createHooks(models.User);
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return () => this.getDataValue('password');
      },
    },
    salt: {
      type: DataTypes.STRING,
      get() {
        return () => this.getDataValue('salt');
      },
    },
    currency: {
      type: DataTypes.ENUM('eur', 'usd', 'ars'),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
