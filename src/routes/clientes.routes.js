import { Router } from "express";
import {
  crearCliente,
  editarCliente,
  eliminarCliente,
  obtenerClientes,
  obtenerCliente,
} from "../controllers/clientes.controller.js";
const router = Router();

router.post("/clientes", crearCliente);
router.get("/clientes", obtenerClientes);
router.get("/clientes/:id", obtenerCliente);
router.delete("/clientes/:id", eliminarCliente);
router.put("/clientes/:id", editarCliente);

export default router;
