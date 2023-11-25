const { Sequelize } = require("sequelize");

const db = new Sequelize('mlbakipg_stukm23', 'mlbakipg_admin', 'admSTUKM23', {
    host: 'api.stukmumn.com',
    dialect: 'mysql'
});

module.exports = db;
