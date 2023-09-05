import { Cliente } from "../models/cliente.model.js";
import { Documento } from "../models/documento.model.js";

export const crearDocumento = async (req, res) => {
  const { idCliente } = req.params;
  const { numeroDocumento, idTipoDocumento } = req.body;
  try {
    const cliente = await Cliente.findByPk(idCliente);
    if (cliente) {
      const nuevoDocumento = await Documento.create({
        numeroDocumento,
        idTipoDocumento,
        idCliente,
      });
      return res.json(nuevoDocumento);
    }
    return res.status(404).json({ error: "Cliente no encontrado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const editarDocumento = async (req, res) => {
  const { id, idCliente } = req.params;
  const { numeroDocumento, idTipoDocumento } = req.body;
  try {
    const documentoActualizado = await Documento.update(
      { numeroDocumento, idTipoDocumento },
      { where: { id, idCliente } }
    );
    if (documentoActualizado[0] === 1) {
      return res.json({
        message: "Documento actualizado correctamente",
        numeroDocumento,
        idTipoDocumento,
      });
    }
    return res.status(404).json({ error: "Documento no encontrado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const eliminarDocumento = async (req, res) => {
  const { id, idCliente } = req.params;
  try {
    const documentoEliminado = await Documento.destroy({
      where: { id, idCliente },
    });
    if (documentoEliminado[0] === 1) {
      return res.json({ message: "Documento eliminado correctamente" });
    }
    return res.status(404).json({ error: "Documento no encontrado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const obtenerDocumentos = async (req, res) => { 
  const { idCliente } = req.params;
  try {
    const documentos = await Documento.findAll({ where: { idCliente } });
    if(documentos.length === 0) {
      return res.status(404).json({ error: "Documentos no encontrados" });
    }
    return res.json(documentos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}