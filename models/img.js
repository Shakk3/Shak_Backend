const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Img = sequelize.define('img_tbl', {
  img_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  img_data: {
    type: DataTypes.TEXT('long'), 
    allowNull: false
  },
  img_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  img_view: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  img_date: {
    type: DataTypes.STRING(20),
    defaultValue: DataTypes.NOW
  },
  img_reference: {
    type: DataTypes.STRING(300),
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Img;
