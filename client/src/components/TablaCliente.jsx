export function TablaCliente({ clientes }) {
  console.log(clientes);
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
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-primary">
                  Editar
                </button>
                <button type="button" class="btn btn-danger">
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
