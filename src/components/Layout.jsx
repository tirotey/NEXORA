import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { logout } from "../services/auth"
import "../App.css"

function Layout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">      

        <img
  src="/logo.png"
  alt="Nexora"
  className="logo"
/>

        <p className="subtitle">
          Sistema de Gestão
        </p>

        <nav className="menu">
          <NavLink to="/dashboard" className="menu-item">
            Dashboard
          </NavLink>

          <NavLink to="/pedidos" className="menu-item">
            Pedidos
          </NavLink>

          <NavLink to="/clientes" className="menu-item">
            Clientes
          </NavLink>

          <NavLink to="/produtos" className="menu-item">
            Produtos
          </NavLink>

          <NavLink to="/orcamentos" className="menu-item">
            Orçamentos
          </NavLink>

          <NavLink to="/relatorios" className="menu-item">
            Relatórios
          </NavLink>

          <NavLink to="/configuracoes" className="menu-item">
            Configurações
          </NavLink>
        </nav>

        <button
          type="button"
          className="logout-btn"
          onClick={handleLogout}
        >
          Sair
        </button>
      </aside>

      <Outlet />
    </div>
  )
}

export default Layout