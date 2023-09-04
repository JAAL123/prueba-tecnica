import axios from './axios'

export const obtenerClientesRequest = () => axios.get("/clientes")