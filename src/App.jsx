import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Pedidos from "./pages/Pedidos.jsx"
import NovoPedido from "./pages/NovoPedido.jsx"
import Clientes from "./pages/Clientes.jsx"
import Produtos from "./pages/Produtos.jsx"
import Orcamentos from "./pages/Orcamentos.jsx"
import Relatorios from "./pages/Relatorios.jsx"
import Configuracoes from "./pages/Configuracoes.jsx"

import PrivateRoute from "./routes/PrivateRoute.jsx"
import Layout from "./components/Layout.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/pedidos/novo" element={<NovoPedido />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/orcamentos" element={<Orcamentos />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App