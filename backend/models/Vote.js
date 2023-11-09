import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Vote = db.define('vote', {
    voteId: {type: DataTypes.STRING, unique: true, primaryKey:true},
    userId: {type: DataTypes.STRING, unique: true, allowNull:false},
    olahraga: {type: DataTypes.STRING, allowNull:false},
    sainsos: {type: DataTypes.STRING, allowNull:false},
    senbud: {type: DataTypes.STRING, allowNull:false},
},{
    freezeTableName:true
})

export default Vote;

// (async()=>{
//     await db.sync();
// })();