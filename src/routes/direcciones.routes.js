import { Router } from "express";
import {
  crearDireccion,
  editarDireccion,
  eliminarDireccion,
  obtenerDirecciones,
} from "../controllers/direcciones.controller.js";

const router = Router();

router.post("/clientes/:idCliente/direcciones", crearDireccion);
router.put("/clientes/:idCliente/direcciones/:id", editarDireccion);
router.delete("/clientes/:idCliente/direcciones/:id", eliminarDireccion);
router.get("/clientes/:idCliente/direcciones", obtenerDirecciones);

export default router;
