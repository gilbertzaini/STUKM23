const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/database.js");

const Vote = db.define('vote', {
    voteId: { type: DataTypes.STRING, unique: true, primaryKey: true },
    userId: { type: DataTypes.STRING, unique: true, allowNull: false },
    olahraga: { type: DataTypes.STRING, allowNull: false },
    sainsos: { type: DataTypes.STRING, allowNull: false },
    senbud: { type: DataTypes.STRING, allowNull: false },
}, {
    freezeTableName: true
});

module.exports = Vote;

// (async () => {
//     await db.sync();
// })();
