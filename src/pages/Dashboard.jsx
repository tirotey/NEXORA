import "../App.css"
import { pedidos as pedidosMock } from "../data/mock"
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const pedidosSalvos =
    JSON.parse(localStorage.getItem("pedidos")) || []

  const pedidosExcluidos =
    JSON.parse(localStorage.getItem("pedidosExcluidos")) || []

  const pedidosMockFiltrados = pedidosMock.filter(
    (pedido) => !pedidosExcluidos.includes(pedido.id)
  )

  const pedidos = [...pedidosSalvos, ...pedidosMockFiltrados]

  const totalPedidos = pedidos.length

  const navigate = useNavigate()

const receitaTotal = pedidos.reduce((total, pedido) => {
  return total + pedido.valor
}, 0)

const clientesUnicos = new Set(
  pedidos.map((pedido) => pedido.cliente)
).size

const orcamentosPendentes = pedidos.filter((pedido) => {
  return pedido.status === "Pendente"
}).length

  return (
    <main className="main">
      <div className="header">
        <div>
          <h1>Dashboard</h1>
          <p className="welcome">
            Bem-vindo ao painel Nexora
          </p>
        </div>

        <button className="btn" 
        onClick={() => navigate("/pedidos/novo")}>
          + Novo pedido
        </button>
      </div>

      <div className="cards">
        <div className="card">
          <p className="card-title">Pedidos este mês</p>
          <h2>{totalPedidos}</h2>
          <span className="green">Dados atualizados</span>
        </div>

        <div className="card">
          <p className="card-title">Receita</p>
          <h2>
            {receitaTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
          <span className="green">Total em pedidos</span>
        </div>

        <div className="card">
          <p className="card-title">Clientes</p>
          <h2>{clientesUnicos}</h2>
          <span className="green">Clientes ativos</span>
        </div>

        <div className="card">
          <p className="card-title">Orçamentos</p>
          <h2>{orcamentosPendentes}</h2>
          <span className="red">Pendentes</span>
        </div>
      </div>

      <div className="content">
        <div className="panel">
          <div className="panel-header">
            <h2>Últimos pedidos</h2>

            <button
  className="ver-todos-btn"
  onClick={() => navigate("/pedidos")}
>
  Ver pedidos
</button>
          </div>

          {pedidos.map((pedido) => (
            <div className="order" key={pedido.id}>
              <div>
                <strong>{pedido.cliente}</strong>
                <p>{pedido.servico}</p>
              </div>

              <strong>
                {pedido.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>

              <span
  className={`badge ${
    pedido.status === "Entregue"
      ? "green-badge"
      : pedido.status === "Produção"
      ? "yellow-badge"
      : pedido.status === "Pendente"
      ? "red-badge"
      : ""
  }`}
>
  {pedido.status}
</span>
            </div>
          ))}
        </div>

        <div className="panel">
          <h2 className="activity-title">
            Atividade recente
          </h2>

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
  )
}

export default Dashboard