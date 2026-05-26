import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"
import { pedidos } from "../data/mock"

function Pedidos() {
  const navigate = useNavigate()

  const [listaPedidos, setListaPedidos] = useState(() => {
    const pedidosSalvos = JSON.parse(localStorage.getItem("pedidos")) || []
    const pedidosExcluidos = JSON.parse(localStorage.getItem("pedidosExcluidos")) || []

    const pedidosMockFiltrados = pedidos.filter(
      (pedido) => !pedidosExcluidos.includes(pedido.id)
    )

    return [...pedidosSalvos, ...pedidosMockFiltrados]
  })

  const handleExcluir = (id) => {
    const novaLista = listaPedidos.filter((pedido) => pedido.id !== id)

    setListaPedidos(novaLista)

    const pedidosSalvos = novaLista.filter(
      (pedido) => !pedidos.some((mock) => mock.id === pedido.id)
    )

    const pedidosExcluidos =
      JSON.parse(localStorage.getItem("pedidosExcluidos")) || []

    localStorage.setItem("pedidos", JSON.stringify(pedidosSalvos))
    localStorage.setItem(
      "pedidosExcluidos",
      JSON.stringify([...pedidosExcluidos, id])
    )
  }

  return (
    <main className="main">
      <div className="header">
        <div>
          <h1>Pedidos</h1>
          <p className="welcome">Gerencie todos os pedidos cadastrados.</p>
        </div>

        <button className="btn" onClick={() => navigate("/pedidos/novo")}>
          + Novo pedido
        </button>
      </div>

      <div className="panel">
        <div className="panel-header">
          <h2>Lista de pedidos</h2>
          <span>{listaPedidos.length} pedidos</span>
        </div>

        {listaPedidos.map((pedido) => (
          <div className="order" key={pedido.id}>
            <div>
              <strong>{pedido.cliente}</strong>
              <p>{pedido.servico}</p>
            </div>

            <p>{pedido.data}</p>

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

            <button
              type="button"
              className="delete-btn"
              onClick={() => handleExcluir(pedido.id)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Pedidos