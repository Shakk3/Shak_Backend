const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
