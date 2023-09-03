import { Router } from "express";
import {
  crearDireccion,
  editarDireccion,
  eliminarDireccion,
} from "../controllers/direcciones.controller.js";

const router = Router();

router.post("/clientes/:idCliente/direcciones", crearDireccion);
router.put("/clientes/:idCliente/direcciones/:id", editarDireccion);
router.delete("/clientes/:idCliente/direcciones/:id", eliminarDireccion);

export default router;
