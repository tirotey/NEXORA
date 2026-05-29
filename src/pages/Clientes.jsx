import { useState } from "react"
import "../App.css"
import { FaUserPlus, FaUsers } from "react-icons/fa"

function Clientes() {
  const [clientes, setClientes] = useState(
    JSON.parse(localStorage.getItem("clientes")) || []
  )

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [busca, setBusca] = useState("")

  const salvarClientes = (novaLista) => {
    setClientes(novaLista)
    localStorage.setItem("clientes", JSON.stringify(novaLista))
  }

  const adicionarCliente = () => {
    if (!nome || !telefone) {
      alert("Preencha pelo menos nome e telefone")
      return
    }

    const novoCliente = {
      id: Date.now(),
      nome,
      telefone,
      email,
    }

    salvarClientes([...clientes, novoCliente])
    setNome("")
    setTelefone("")
    setEmail("")
  }

  const excluirCliente = (id) => {
    const novaLista = clientes.filter((cliente) => cliente.id !== id)
    salvarClientes(novaLista)
  }

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <main className="main">
      <div className="header">
        <div>
          <h1>Clientes</h1>
          <p className="welcome">Cadastre e gerencie seus clientes</p>
        </div>
      </div>

      <section className="form-card clientes-card">
        <div className="section-title">
          <FaUserPlus className="section-icon" />
          <h2>Novo cliente</h2>
        </div>

        <div className="clientes-form-grid">
          <div className="form-group">
            <label>Nome do cliente</label>
            <input
              type="text"
              placeholder="Digite o nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Telefone</label>
            <input
              type="text"
              placeholder="Digite o telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite o e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="btn add-client-btn" onClick={adicionarCliente}>
            + Adicionar cliente
          </button>
        </div>
      </section>

      <section className="table-card clientes-card">
        <div className="clientes-list-header">
          <div>
            <div className="section-title">
              <FaUsers className="section-icon" />
              <h2>Lista de clientes</h2>
            </div>

            <p className="total-clientes">
              Total de clientes: <span>{clientes.length}</span>
            </p>
          </div>

          <input
            className="search-input"
            type="text"
            placeholder="Buscar por nome..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {clientes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">👥</div>
            <h3>Nenhum cliente cadastrado ainda.</h3>
            <p>Adicione seu primeiro cliente usando o formulário acima.</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>E-mail</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {clientesFiltrados.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.email || "-"}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => excluirCliente(cliente.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  )
}

export default Clientes