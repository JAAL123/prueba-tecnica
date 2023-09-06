/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCliente } from "../context/ClientesContext";

export function TablaCliente() {
  const { eliminarCliente, clientes, obtenerClientes, loading } = useCliente();
  const navigate = useNavigate();
  useEffect(() => {
    obtenerClientes();
  }, [loading]);
  return (
    <table className="table table-striped ">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Direccion</th>
          <th>Documento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((clientes) => (
          <tr key={clientes?.id}>
            <th>{clientes?.nombre}</th>
            <th>{clientes?.correo}</th>
            <th>{clientes?.telefono}</th>
            <th>{clientes?.direcciones[0]?.direccion}</th>
            <th>{clientes?.documentos[0]?.numeroDocumento}</th>
            <th>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate(`/editar-cliente/${clientes.id}`)}
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCliente(clientes.id)}
                >
                  Eliminar
                </button>
              </div>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
