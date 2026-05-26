import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"

function NovoPedido() {
  const navigate = useNavigate()

  const [cliente, setCliente] = useState("")
  const [servico, setServico] = useState("")
  const [valor, setValor] = useState("")
  const [status, setStatus] = useState("Pendente")

 const handleSalvar = (e) => {
  e.preventDefault()

  const novoPedido = {
    id: Date.now(),
    cliente,
    servico,
    valor: Number(valor),
    status,
    data: new Date().toLocaleDateString("pt-BR"),
  }

  const pedidosSalvos = JSON.parse(localStorage.getItem("pedidos")) || []

  localStorage.setItem(
    "pedidos",
    JSON.stringify([novoPedido, ...pedidosSalvos])
  )

  navigate("/pedidos")

  }

  return (
    <main className="main">
      <div className="header">
        <div>
          <h1>Novo Pedido</h1>
          <p className="welcome">Cadastre um novo pedido</p>
        </div>
      </div>

      <form className="form-card" onSubmit={handleSalvar}>
        <label>
          Cliente
          <input
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            placeholder="Nome do cliente"
            required
          />
        </label>

        <label>
          Serviço
          <input
            type="text"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            placeholder="Ex: Camiseta personalizada"
            required
          />
        </label>

        <label>
          Valor
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="Ex: 150"
            required
          />
        </label>

        <label>
          Status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pendente">Pendente</option>
            <option value="Produção">Produção</option>
            <option value="Entregue">Entregue</option>
          </select>
        </label>

        <button className="btn" type="submit">
          Salvar pedido
        </button>
      </form>
    </main>
  )
}

export default NovoPedido