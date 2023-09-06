import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  obtenerClienteRequest,
  obtenerDireccionesRequest,
  obtenerDocumentosRequest,
} from "../api/clientes";
import { useCliente } from "../context/ClientesContext";
export function EditarRegistro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const { idCliente } = useParams();
  const { editarCliente } = useCliente();

  const onSubmit = handleSubmit((data) => {
    editarCliente(idCliente, data);
    navigate("/");
  });

  const [direcciones, setDirecciones] = useState([]);
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    const cargarCliente = async () => {
      if (idCliente) {
        const info = await obtenerClienteRequest(idCliente);
        setValue("nombre", info.data.nombre);
        setValue("correo", info.data.correo);
        setValue("telefono", info.data.telefono);
        const reqDirecciones = await obtenerDireccionesRequest(idCliente);
        const reqDocumentos = await obtenerDocumentosRequest(idCliente);
        setDirecciones(reqDirecciones.data);
        setDocumentos(reqDocumentos.data);
        console.log(documentos);
      }
    };
    cargarCliente();
  }, []);
  const onClick = () => {
    navigate("/");
  };
  return (
    <div className="container my-2">
      <h1>Editar Cliente</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && <span>Este campo es requerido</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("correo", { required: true })}
          />
          {errors.correo && <span>Este campo es requerido</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Teléfono
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("telefono", { required: true })}
          />
          {errors.telefono && <span>Este campo es requerido</span>}
        </div>
        <div className="flex gap-2 mb-3">
          <button type="submit" className="btn btn-primary mx-2">
            Guardar
          </button>
          <button
            type="button"
            className="btn btn-danger mx-2"
            onClick={onClick}
          >
            Cancelar
          </button>
        </div>
      </form>
      <hr />
      <label htmlFor="">Direcciones</label>

      <div className=" w-75 my-2 rounded">
        <table className="table table-hover ">
          <tbody>
            {direcciones.map((direccion) => (
              <tr key={direccion?.id}>
                <th>{direccion?.direccion}</th>
                <th className="text-end">
                  <button className="btn btn-primary mx-2">Editar</button>
                  <button className="btn btn-danger mx-2 ">Eliminar</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">Añadir direccion</button>
      </div>
      <hr />
      <label htmlFor="">Documentos</label>
      <div className=" w-75 my-2 rounded">
        <table className="table table-hover ">
          <tbody>
            {documentos.map((documento) => (
              <tr key={documento?.id}>
                <th>{documento?.numeroDocumento}</th>
                <th className="text-end">
                  <button className="btn btn-primary mx-2">Editar</button>
                  <button className="btn btn-danger mx-2 ">Eliminar</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">Añadir documento</button>
      </div>
      <hr />
      <button className="btn btn-primary" onClick={() => navigate("/")}>Regresar</button>
    </div>
  );
}
