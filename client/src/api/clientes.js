import axios from './axios'

export const obtenerClientesRequest = () => axios.get("/clientes")

export const crearClienteRequest = (cliente) => axios.post("/clientes", cliente)

export const eliminarClienteRequest = (id) => axios.delete(`/clientes/${id}`)