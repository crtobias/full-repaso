import {DataTypes} from "sequelize"
import  {sequelize}  from "../database/database.js"
import { habilidades } from "./Habilidades.js"
export const Personaje = sequelize.define("Personaje",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING,

    },
    weapon:{
        type: DataTypes.STRING,

    },
    hp:{
        type: DataTypes.INTEGER,
    },
})


//relacion de muchas habilidades a 1 solo personaje de muchos a uno

Personaje.hasMany(habilidades,{
    foreingKey: "PersonajeId",
    sourceKey: "id"
})

habilidades.belongsTo(Personaje,{
    foreingKey: "PersonajeId",
    targetId: "id"
})