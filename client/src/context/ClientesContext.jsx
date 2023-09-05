import { createContext, useContext, useState } from "react";
import { obtenerClientesRequest, crearClienteRequest, eliminarClienteRequest } from "../api/clientes";

const ClienteContext = createContext();

export const useCliente = () => {
  const context = useContext(ClienteContext);
  if (!context) {
    throw new Error("useCliente debe ser utilizado con un ClienteProvider");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export function ClienteProvider({ children }) {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(false);

  const obtenerClientes = async () => {
    const res = await obtenerClientesRequest();
    try {
      setLoading(true);
      setClientes(res.data);
      if(res.status === 200){
        setLoading(false);
      } 
    } catch (error) {
      console.log(res);
    }
  };

  const crearCliente = async (cliente) => {
    const res = await crearClienteRequest(cliente);
    try {
      setClientes([...clientes, res.data]);
    } catch (error) {
      console.log(res);
    }
  }

  const eliminarCliente = async (id) => { 
    const res = await eliminarClienteRequest(id);
    try {
      if(res.status === 200) {
        const clientesFiltrados = clientes.filter(cliente => cliente.id !== id)
        setClientes(clientesFiltrados)
      }
      console.log(res);
    } catch (error) {
      console.log(res);
    }
  };

  return (
    <ClienteContext.Provider
      value={{
        obtenerClientes,
        crearCliente,
        eliminarCliente,
        clientes,
        loading,
      }}
    >
      {children}
    </ClienteContext.Provider>
  );
}
