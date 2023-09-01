import {sequelize} from '../db.js'
import {DataTypes} from 'sequelize'

export const Client = sequelize.define('cliente_info',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
    },
    correo:{
        type: DataTypes.STRING,
        unique: true
    },
    telefono: {
        type: DataTypes.STRING
    },
    numeroDUI:{
        type: DataTypes.STRING,
        unique: true
    },
    numeroPasaporte: {
        type: DataTypes.STRING,
        unique: true
    },
    numeroLicencia: {
        type: DataTypes.STRING
    },
    direcciones: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
    }
})
