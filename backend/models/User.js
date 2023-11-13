import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('user', {
    userId: {type: DataTypes.STRING, primaryKey: true, unique: true},
    nim: {type: DataTypes.STRING, unique: true, allowNull:false},
    // email: {type: DataTypes.STRING, unique: true, allowNull:false},
    nama: {type: DataTypes.STRING, allowNull:false},
    jurusan: {type: DataTypes.STRING, allowNull:false},
    angkatan: {type: DataTypes.STRING, allowNull:false},
    ukm: {type: DataTypes.STRING, allowNull:true},
},{
    freezeTableName:true
})

export default User;

(async()=>{
    await db.sync();
})();