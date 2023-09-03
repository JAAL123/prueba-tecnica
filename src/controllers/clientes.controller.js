import { Cliente } from "../models/cliente.model.js";
import { Documento } from "../models/documento.model.js";
import { Direccion } from "../models/direcciones.model.js";

export const crearCliente = async (req, res) => {
  const { nombre, correo, telefono, documentos, direcciones } = req.body;
  console.log(req.body);
  try {
    const nuevoCliente = await Cliente.create(
      {
        nombre,
        correo,
        telefono,
        direcciones,
        documentos,
      },
      {
        include: [
          { model: Direccion, as: "direcciones" },
          { model: Documento, as: "documentos" },
        ],
      }
    );
    return res.json(nuevoCliente);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      include: [
        { model: Direccion, as: "direcciones" },
        { model: Documento, as: "documentos" },
      ],
    });
    return res.json(clientes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const eliminarCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const clienteEliminado = await Cliente.destroy({ where: { id } });
    if (clienteEliminado) {
      await Documento.destroy({ where: { idCliente: id } });
      await Direccion.destroy({ where: { idCliente: id } });
      return res.json({ message: "Cliente eliminado correctamente" });
    }
    return res.status(404).json({ error: "Cliente no encontrado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const editarCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, telefono } = req.body;
  try {
    const clienteEditado = await Cliente.update(
      {
        nombre,
        correo,
        telefono,
      },
      { where: { id } }
    );
    if (clienteEditado) {
      return res.json({ message: "Cliente editado correctamente" });
    }
    return res.status(404).json({ error: "Cliente no encontrado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
