import  { useEffect, } from "react";
import { useCliente } from "../context/ClientesContext";
import {TablaCliente} from '../components/TablaCliente'

export function ClientesPage() {
  const { obtenerClientes, clientes } = useCliente();
  useEffect(() => {
    obtenerClientes();
  }, []);
  console.log(clientes);
  return (
    <>
      <h1 className="text-center">Pagina de Clientes</h1>
      
      <TablaCliente clientes={clientes}/>
    </>
  );
}
