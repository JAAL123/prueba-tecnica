import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientesPage } from "./pages/ClientesPage";
import { ClienteProvider } from "./context/ClientesContext";

function App() {
  return (
    <ClienteProvider>
      <BrowserRouter>
        <main className="container my-2">
          <Routes>
            <Route path="/" element={<ClientesPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ClienteProvider>
  );
}

export default App;
