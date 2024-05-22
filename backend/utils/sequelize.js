const sequelize = require('./configSequelizer');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', { 
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true 
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'users' 
});

module.exports = User;
