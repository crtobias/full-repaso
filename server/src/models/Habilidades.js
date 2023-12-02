import {DataTypes} from "sequelize"
import {sequelize} from "../database/database.js"

export const habilidades = sequelize.define('habilidads',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING
    },
    dmg:{
        type: DataTypes.INTEGER
    }
})