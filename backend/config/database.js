import { Sequelize } from "sequelize";

const db = new Sequelize('stukm23', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
