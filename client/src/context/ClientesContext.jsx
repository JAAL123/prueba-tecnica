import { createContext, useContext, useState } from "react";
import { obtenerClientesRequest } from "../api/clientes";

const ClienteContext = createContext();

export const useCliente = () => {
  const context = useContext(ClienteContext);
  if (!context) {
    throw new Error("useCliente debe ser utilizado con un ClienteProvider");
  }
  return context;
};

export function ClienteProvider({ children }) {
  const [clientes, setClientes] = useState([]);

  const obtenerClientes = async () => {
    const res = await obtenerClientesRequest();
    try {
      setClientes(res.data);
    } catch (error) {
      console.log(res);
    }
  };

  return (
    <ClienteContext.Provider
      value={{
        obtenerClientes,
        clientes,
      }}
    >
      {children}
    </ClienteContext.Provider>
  );
}
