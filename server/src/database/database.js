import Sequelize from "sequelize"

export const sequelize = new Sequelize('test', 'postgres', '0102', {
    host: "localhost",
    dialect: 'postgres'
})