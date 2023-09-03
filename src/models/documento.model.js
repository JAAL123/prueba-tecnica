import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { TipoDocumento } from "./tipoDocumento.model.js";

export const Documento = sequelize.define("documento", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  numeroDocumento: {
    type: DataTypes.STRING,
  },
});
//define the relationship between the models (one to many)
Documento.belongsTo(TipoDocumento, { foreignKey: "idTipoDocumento" });
TipoDocumento.hasMany(Documento, { foreignKey: "idTipoDocumento" });
