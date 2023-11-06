import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Vote = db.define('vote', {
    nim: {type: DataTypes.STRING, unique: true, allowNull:false},
    email: {type: DataTypes.STRING, unique: true, allowNull:false},
    nama: {type: DataTypes.STRING, allowNull:false},
    jurusan: {type: DataTypes.STRING, allowNull:false},
    angkatan: {type: DataTypes.STRING, allowNull:false},
    ukm: {type: DataTypes.STRING, allowNull:true},
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