import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Direccion = sequelize.define("direcciones", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  direccion: {
    type: DataTypes.STRING,
  },
});
