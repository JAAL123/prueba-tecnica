import { Router } from "express";
import {
  crearCliente,
  editarCliente,
  eliminarCliente,
  obtenerClientes,
} from "../controllers/clientes.controller.js";
const router = Router();

router.post("/clientes", crearCliente);
router.get("/clientes", obtenerClientes);
router.delete("/clientes/:id", eliminarCliente);
router.put("/clientes/:id", editarCliente);

export default router;
