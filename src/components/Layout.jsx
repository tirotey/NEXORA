import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()

  const active = (path) =>
    location.pathname === path ? '#111827' : '#6b7280'

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial' }}>
      <aside
        style={{
          width: '240px',
          background: '#f3f4f6',
          padding: '20px',
          borderRight: '1px solid #ddd',
        }}
      >
        <h2 style={{ marginBottom: '30px' }}>NovaVest</h2>

        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <Link
            to="/"
            style={{ textDecoration: 'none', color: active('/') }}
          >
            Dashboard
          </Link>

          <Link
            to="/entregas"
            style={{ textDecoration: 'none', color: active('/entregas') }}
          >
            Entregas
          </Link>

          <Link
            to="/entregadores"
            style={{ textDecoration: 'none', color: active('/entregadores') }}
          >
            Entregadores
          </Link>
        </nav>
      </aside>

      <main
        style={{
          flex: 1,
          padding: '30px',
          background: '#f9fafb',
        }}
      >
        <Outlet />
      </main>
    </div>
  )
}

export default Layout