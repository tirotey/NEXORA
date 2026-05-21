import "./App.css"
import logo from "./assets/logo.png"

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

          <div className="menu-item active">
            Dashboard
          </div>

          <div className="menu-item">
            Pedidos
          </div>

          <div className="menu-item">
            Clientes
          </div>

          <div className="menu-item">
            Produtos
          </div>

          <div className="menu-item">
            Orçamentos
          </div>

          <div className="menu-item">
            Relatórios
          </div>

          <div className="menu-item">
            Configurações
          </div>

        </div>

      </aside>

      {/* MAIN */}
      <main className="main">

        {/* HEADER */}
        <div className="header">

          <div>
            <h1>Dashboard</h1>

            <p className="welcome">
              Bem-vindo ao painel da Novavest
            </p>
          </div>

          <button className="btn">
            + Novo pedido
          </button>

        </div>

        {/* CARDS */}
        <div className="cards">

          <div className="card">
            <p className="card-title">
              Pedidos este mês
            </p>

            <h2>142</h2>

            <span className="green">
              ↑ 12% vs mês anterior
            </span>
          </div>

          <div className="card">
            <p className="card-title">
              Receita (R$)
            </p>

            <h2>38.450</h2>

            <span className="green">
              ↑ 8% vs mês anterior
            </span>
          </div>

          <div className="card">
            <p className="card-title">
              Clientes ativos
            </p>

            <h2>67</h2>

            <span className="green">
              ↑ 3 novos
            </span>
          </div>

          <div className="card">
            <p className="card-title">
              Orçamentos abertos
            </p>

            <h2>11</h2>

            <span className="red">
              ↓ 4 pendentes
            </span>
          </div>

        </div>

        {/* CONTENT */}
        <div className="content">

          {/* PEDIDOS */}
          <div className="panel">

            <div className="panel-header">

              <h2>
                Últimos pedidos
              </h2>

              <button className="view-all">
                Ver todos
              </button>

            </div>

            <div className="order">

              <div>
                <strong>
                  Condomínio Barra Mar
                </strong>

                <p>
                  ASG e Manutenção
                </p>
              </div>

              <strong>
                R$ 4.200
              </strong>

              <div className="badge green-badge">
                Entregue
              </div>

            </div>

            <div className="order">

              <div>
                <strong>
                  Restaurante Sabor & Cia
                </strong>

                <p>
                  Bar e Restaurante
                </p>
              </div>

              <strong>
                R$ 1.850
              </strong>

              <div className="badge yellow-badge">
                Produção
              </div>

            </div>

            <div className="order">

              <div>
                <strong>
                  Hospital São Lucas
                </strong>

                <p>
                  EPI
                </p>
              </div>

              <strong>
                R$ 7.600
              </strong>

              <div className="badge green-badge">
                Entregue
              </div>

            </div>

          </div>

          {/* ATIVIDADES */}
          <div className="panel">

            <h2 className="activity-title">
              Atividade recente
            </h2>

            <div className="activity">

              <div className="dot yellow"></div>

              <div>
                <p>
                  Novo orçamento solicitado
                </p>

                <span>
                  há 20 min
                </span>
              </div>

            </div>

            <div className="activity">

              <div className="dot green"></div>

              <div>
                <p>
                  Pedido #318 marcado como entregue
                </p>

                <span>
                  há 1h
                </span>
              </div>

            </div>

            <div className="activity">

              <div className="dot gray"></div>

              <div>
                <p>
                  Produto "Avental Chef Premium"
                  atualizado
                </p>

                <span>
                  há 3h
                </span>
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}

export default App