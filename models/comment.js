const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comment = sequelize.define('img_comment_tbl', {
  img_comment_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  img_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  comment_content: {
    type: DataTypes.STRING(2500),
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Comment;
