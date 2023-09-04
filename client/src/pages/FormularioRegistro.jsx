import { useForm, useFieldArray } from "react-hook-form";

export function FormularioRegistro() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      direcciones: [{ direccion: "" }],
      documentos: [{ numeroDocumento: "", idTipoDocumento: 0 }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "direcciones",
  });
  const { fields: fields2, append: append2, remove: remove2 } = useFieldArray({
    control,
    name: "documentos",
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="container my-2">
      <h1>Formulario de registro</h1>
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
            Telefono
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
        <hr className="" />
        <label htmlFor="" className="mb-3">
          Direcciones:
        </label>
        <div className="mb-3">
          {fields.map((item, index) => (
            <div className="input-group mb-3" key={item.id}>
              <span className="input-group-text" id="basic-addon1">
                Dirección
              </span>
              <input
                type="text"
                name={`direcciones[${index}].direccion`}
                {...register(`direcciones.${index}.direccion`)}
                className="form-control"
              />
              <button
                type="button"
                className={`btn btn-outline-secondary ${
                  index === 0 && "d-none"
                }`}
                onClick={() => remove(index)}
              >
                Eliminar
              </button>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() =>
                  append({
                    direccion: "",
                  })
                }
              >
                Añadir dirección
              </button>
            </div>
          ))}
        </div>
        <hr className="" />
        <label htmlFor="" className="mb-3">
          Documentos:
        </label>
        <div className="mb-3">
          {fields2.map((item, index) => (
            <div className="input-group mb-3" key={item.id}>
              <span className="input-group-text" id="basic-addon1">
                N° Documento
              </span>
              <input
                type="text"
                name={`documentos[${index}].numeroDocumento`}
                {...register(`documentos.${index}.numeroDocumento`)}
                className="form-control"
              />
              <select
                name={`documentos[${index}].idTipoDocumento`}
                {...register(`documentos.${index}.idTipoDocumento`)}
                className="form-select"
              >
                <option value="0">Tipo de documento</option>
                <option value="1">DUI</option>
                <option value="2">Licencia</option>
                <option value="3">Pasaporte</option>
              </select>
              <button
                type="button"
                className={`btn btn-outline-secondary ${
                  index === 0 && "d-none"
                }`}
                onClick={() => remove2(index)}
              >
                Eliminar
              </button>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() =>
                  append2({ numeroDocumento: "", idTipoDocumento: 0 })
                }
              >
                Añadir documento
              </button>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
