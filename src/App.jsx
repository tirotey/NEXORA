import "./App.css"

function App() {
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <img
          src="/logo.png"
          alt="Novavest"
          className="logo"
        />

        <p className="subtitle">
          Painel administrativo
        </p>

        <div className="menu">
          <div className="menu-item active">Dashboard</div>
          <div className="menu-item">Pedidos</div>
          <div className="menu-item">Clientes</div>
          <div className="menu-item">Produtos</div>
          <div className="menu-item">Orçamentos</div>
          <div className="menu-item">Relatórios</div>
          <div className="menu-item">Configurações</div>
        </div>

      </aside>

      {/* MAIN */}
      <main className="main">

        <div className="header">

          <div>
            <h1>Dashboard</h1>
            <p className="welcome">Bem-vindo ao painel Novavest</p>
          </div>

          <button className="btn">+ Novo pedido</button>

        </div>

        {/* CARDS */}
        <div className="cards">

          <div className="card">
            <p className="card-title">Pedidos este mês</p>
            <h2>142</h2>
            <span className="green">↑ 12% vs mês anterior</span>
          </div>

          <div className="card">
            <p className="card-title">Receita</p>
            <h2>38.450</h2>
            <span className="green">↑ crescimento</span>
          </div>

          <div className="card">
            <p className="card-title">Clientes</p>
            <h2>67</h2>
            <span className="green">↑ novos clientes</span>
          </div>

          <div className="card">
            <p className="card-title">Orçamentos</p>
            <h2>11</h2>
            <span className="red">↓ pendentes</span>
          </div>

        </div>

        {/* CONTENT */}
        <div className="content">

          <div className="panel">

            <div className="panel-header">
              <h2>Últimos pedidos</h2>
              <button className="view-all">Ver todos</button>
            </div>

            <div className="order">
              <div>
                <strong>Condomínio Barra Mar</strong>
                <p>Serviços gerais</p>
              </div>

              <strong>R$ 4.200</strong>

              <span className="badge green-badge">Entregue</span>
            </div>

            <div className="order">
              <div>
                <strong>Restaurante Sabor & Cia</strong>
                <p>Uniformes</p>
              </div>

              <strong>R$ 1.850</strong>

              <span className="badge yellow-badge">Produção</span>
            </div>

          </div>

          <div className="panel">

            <h2 className="activity-title">Atividade recente</h2>

            <div className="activity">
              <div className="dot yellow"></div>
              <div>
                <p>Novo orçamento solicitado</p>
                <span>há 20 min</span>
              </div>
            </div>

            <div className="activity">
              <div className="dot green"></div>
              <div>
                <p>Pedido entregue</p>
                <span>há 1h</span>
              </div>
            </div>

            <div className="activity">
              <div className="dot gray"></div>
              <div>
                <p>Produto atualizado</p>
                <span>há 3h</span>
              </div>
            </div>

          </div>

        </div>

      </main>

    </div>
  )
}

export default App