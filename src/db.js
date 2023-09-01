import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize('clients','postgres', '12345678', {
    host: 'localhost',
    dialect: 'postgres'
})

