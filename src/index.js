import app from "./app.js";
import { sequelize } from "./db.js";
import "./models/cliente.model.js";
import "./models/documento.model.js";
import "./models/tipoDocumento.model.js";
try {
  // await sequelize.authenticate();
  // await sequelize.drop({ force: true });
  await sequelize.sync();
  console.log("connected");
  app.listen(4000);
  console.log("API running");
} catch (error) {
  console.log(error);
}
