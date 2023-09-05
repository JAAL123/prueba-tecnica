import { Direccion } from "../models/direcciones.model.js";
import { Cliente } from "../models/cliente.model.js";

export const crearDireccion = async (req, res) => {
  const { idCliente } = req.params;
  const { direccion } = req.body;
  try {
    const cliente = await Cliente.findByPk(idCliente);
    if (cliente) {
      const nuevaDireccion = await Direccion.create({ direccion, idCliente });
      return res.json(nuevaDireccion);
    }
    return res.status(404).json({ error: "Cliente no encontrado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const editarDireccion = async (req, res) => {
  const { id, idCliente } = req.params;
  const { direccion } = req.body;
  try {
    const direccionActualizada = await Direccion.update(
      { direccion },
      { where: { id, idCliente } }
    );
    console.log(direccionActualizada);
    if (direccionActualizada[0] === 1) {
      return res.json({
        message: "Dirección actualizada correctamente",
        direccion,
      });
    }
    return res.status(404).json({ error: "Dirección no encontrada" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const eliminarDireccion = async (req, res) => {
  const { id, idCliente } = req.params;
  try {
    const direccionEliminada = await Direccion.destroy({
      where: { id, idCliente },
    });
    if (direccionEliminada[0] === 1) {
      return res.json({ message: "Dirección eliminada correctamente" });
    }
    return res.status(404).json({ error: "Dirección no encontrada" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const obtenerDirecciones = async (req, res) => { 
  const { idCliente } = req.params;
  try {
    const direcciones = await Direccion.findAll({ where: { idCliente } });
    if(direcciones.length === 0) {
      return res.status(404).json({ error: "Direcciones no encontradas" });
     }
    return res.json(direcciones);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
