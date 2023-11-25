const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/database.js");

const User = db.define('user', {
    userId: { type: DataTypes.STRING, primaryKey: true, unique: true },
    nim: { type: DataTypes.STRING, unique: true, allowNull: false },
    // email: { type: DataTypes.STRING, unique: true, allowNull: false },
    nama: { type: DataTypes.STRING, allowNull: false },
    jurusan: { type: DataTypes.STRING, allowNull: false },
    angkatan: { type: DataTypes.STRING, allowNull: false },
    ukm: { type: DataTypes.STRING, allowNull: true },
}, {
    freezeTableName: true
});

module.exports = User;

// (async () => {
//     await db.sync();
// })();
