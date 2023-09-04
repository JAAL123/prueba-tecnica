/* eslint-disable react/prop-types */

import { useCliente } from "../context/ClientesContext";

export function TablaCliente({ clientes }) {
  const { eliminarCliente } = useCliente();

  // const onClick = (id) => {
  //   console.log(id);
  //   // eliminarCliente(id);
  // };
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
        {clientes.map((cliente) => (
          <tr key={cliente.id}>
            <th>{cliente.nombre}</th>
            <th>{cliente.correo}</th>
            <th>{cliente.telefono}</th>
            <th>{cliente.direcciones[0].direccion}</th>
            <th>{cliente.documentos[0].numeroDocumento}</th>
            <th>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" className="btn btn-primary">
                  Editar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCliente(cliente.id)}
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
