import express from "express";
import cors from "cors";
import morgan from "morgan";
import usuarioRoutes from "./routes/clientes.routes.js";
import direccionRoutes from "./routes/direcciones.routes.js";
import documentoRoutes from "./routes/documentos.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", usuarioRoutes);
app.use("/api", direccionRoutes);
app.use("/api", documentoRoutes);

export default app;
