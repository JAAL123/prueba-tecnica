import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Documento } from "./documento.model.js";
import { Direccion } from "./direcciones.model.js";

export const Cliente = sequelize.define("cliente", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
    unique: true,
  },
  telefono: {
    type: DataTypes.STRING,
  },
});

Cliente.documentos = Cliente.hasMany(Documento, { foreignKey: "idCliente" });
Cliente.direcciones = Cliente.hasMany(Direccion, { foreignKey: "idCliente" });
Direccion.belongsTo(Cliente, { foreignKey: "idCliente" });
