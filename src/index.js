import app from "./app.js";
import { sequelize } from "./db.js";
import "./models/direccion.model.js";
try {
  //   await sequelize.authenticate();
  await sequelize.sync({force: true});
  console.log("connected");
  app.listen(4000);
  console.log("API running");
} catch (error) {
  console.log(error);
}
