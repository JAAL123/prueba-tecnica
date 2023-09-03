import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("clientes", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});
