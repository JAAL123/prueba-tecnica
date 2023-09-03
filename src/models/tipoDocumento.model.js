import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const TipoDocumento = sequelize.define(
  "tipo_documento",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipoDocumento: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);
