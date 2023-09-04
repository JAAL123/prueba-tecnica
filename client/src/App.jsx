import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientesPage } from "./pages/ClientesPage";
import { ClienteProvider } from "./context/ClientesContext";
import { FormularioRegistro } from "./pages/FormularioRegistro";

function App() {
  return (
    <ClienteProvider>
      <BrowserRouter>
        <main className="container my-2">
          <Routes>
            <Route path="/" element={<ClientesPage />} />
            <Route path="/clientes" element= {<FormularioRegistro/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </ClienteProvider>
  );
}

export default App;
