import { useState } from "react"
import "../App.css"
import { pedidos } from "../data/mock"

function Pedidos() {
  const [listaPedidos, setListaPedidos] = useState(pedidos)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [cliente, setCliente] = useState("")
const [servico, setServico] = useState("")
const [valor, setValor] = useState("")
const [status, setStatus] = useState("Pendente")
const handleNovoPedido = () => {

  const novoPedido = {
    id: Date.now(),
    cliente,
    servico,
    valor: Number(valor),
    status,
    data: new Date().toLocaleDateString("pt-BR"),
  }

  setListaPedidos([novoPedido, ...listaPedidos])

  setCliente("")
  setServico("")
  setValor("")
  setStatus("Pendente")

  setMostrarFormulario(false)
}
  return (
    <main className="main">

      <div className="header">
        <div>
          <h1>Pedidos</h1>

          <p className="welcome">
            Gerencie todos os pedidos cadastrados.
          </p>
        </div>

        <button
          className="btn"
          onClick={() => setMostrarFormulario(true)}
        >
          + Novo pedido
        </button>
      </div>

      {mostrarFormulario && (
        <div className="panel">
          <h2>Novo pedido</h2>

          <div className="form">
 <input
  type="text"
  placeholder="Cliente"
  className="input"
  value={cliente}
  onChange={(e) => setCliente(e.target.value)}
/>


  <input
  type="text"
  placeholder="Serviço"
  className="input"
  value={servico}
  onChange={(e) => setServico(e.target.value)}
/>

 <input
  type="number"
  placeholder="Valor"
  className="input"
  value={valor}
  onChange={(e) => setValor(e.target.value)}
/>

  <select
  className="input"
  value={status}
  onChange={(e) => setStatus(e.target.value)}
>
  <option>Pendente</option>
  <option>Produção</option>
  <option>Entregue</option>
</select>

</div>

<div className="form-actions">
  <button
    className="btn"
    onClick={handleNovoPedido}
  >
    Salvar pedido
  </button>
</div>

  <div className="form-actions">

  <button
    className="ver-todos-btn"
    onClick={() => setMostrarFormulario(false)}
  >
    Cancelar
  </button>

</div>
        </div>
      )}

      <div className="panel">
        <div className="panel-header">
          <h2>Lista de pedidos</h2>

          <span>
            {listaPedidos.length} pedidos
          </span>
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
          </div>
        ))}
      </div>

    </main>
  )
}

export default Pedidos