const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Emotion = sequelize.define('img_emotion_tbl', {
  emotion_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  img_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  emotion_angry: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  emotion_new: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  emotion_love: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  emotion_crazy: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  timestamps: false
});

module.exports = Emotion;
