import { useEffect } from "react";
import { useCliente } from "../context/ClientesContext";
import { TablaCliente } from "../components/TablaCliente";
import {useNavigate} from 'react-router-dom'

export function ClientesPage() {
  const { obtenerClientes, clientes } = useCliente();
  useEffect(() => {
    obtenerClientes();
  }, []);
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/crear-cliente')
  }
  return (
    <>
      <h1 className="text-center">Pagina de Clientes</h1>
      <button className="btn btn-success mb-2" onClick={onClick}>Crear cliente</button>
      <TablaCliente clientes={clientes} />
    </>
  );
}
