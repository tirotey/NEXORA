import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx"

import Pedidos from "./pages/Pedidos.jsx"
import Clientes from "./pages/Clientes.jsx"
import Produtos from "./pages/Produtos.jsx"
import Orcamentos from "./pages/Orcamentos.jsx"
import Relatorios from "./pages/Relatorios.jsx"
import Configuracoes from "./pages/Configuracoes.jsx"

import PrivateRoute from "./routes/PrivateRoute.jsx"
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/pedidos"
          element={
            <PrivateRoute>
              <Pedidos />
            </PrivateRoute>
          }
        />

        <Route
          path="/clientes"
          element={
            <PrivateRoute>
              <Clientes />
            </PrivateRoute>
          }
        />

        <Route
          path="/produtos"
          element={
            <PrivateRoute>
              <Produtos />
            </PrivateRoute>
          }
        />

        <Route
          path="/orcamentos"
          element={
            <PrivateRoute>
              <Orcamentos />
            </PrivateRoute>
          }
        />

        <Route
          path="/relatorios"
          element={
            <PrivateRoute>
              <Relatorios />
            </PrivateRoute>
          }
        />

        <Route
          path="/configuracoes"
          element={
            <PrivateRoute>
              <Configuracoes />
            </PrivateRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App