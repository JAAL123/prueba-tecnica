import { Router } from "express";
import {
  crearDocumento,
  editarDocumento,
  eliminarDocumento,
} from "../controllers/documento.controller.js";

const router = Router();

router.post("/clientes/:idCliente/documentos", crearDocumento);
router.put("/clientes/:idCliente/documentos/:id", editarDocumento);
router.delete("/clientes/:idCliente/documentos/:id", eliminarDocumento);

export default router;
