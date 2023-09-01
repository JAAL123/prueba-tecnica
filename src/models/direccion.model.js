import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import {Client} from './cliente.model.js'

const Direccion = sequelize.define("direcciones_extra", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  direcciones:{
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});


//una direccion pertenece a un cliente
//muchas direcciones pueden pertenecer a un cliente