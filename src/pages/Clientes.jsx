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
  const [cep, setCep] = useState("")
const [rua, setRua] = useState("")
const [numero, setNumero] = useState("")
const [bairro, setBairro] = useState("")
const [cidade, setCidade] = useState("")
const [complemento, setComplemento] = useState("")
const [referencia, setReferencia] = useState("")
const [clienteEditandoId, setClienteEditandoId] = useState(null)

  const salvarClientes = (novaLista) => {
    setClientes(novaLista)
    localStorage.setItem("clientes", JSON.stringify(novaLista))
  }

  const buscarCep = async (cepDigitado) => {
  const cepLimpo = cepDigitado.replace(/\D/g, "")

  if (cepLimpo.length !== 8) return

  try {
    const response = await fetch(
      `https://viacep.com.br/ws/${cepLimpo}/json/`
    )

    const data = await response.json()

    if (!data.erro) {
      setRua(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
    }
  } catch (error) {
    console.error("Erro ao buscar CEP", error)
  }
}

 const adicionarCliente = () => {
  if (!nome || !telefone || !rua || !numero || !bairro || !cidade || !referencia) {
    alert("Preencha nome, telefone, endereço e referência")
    return
  }

  if (clienteEditandoId) {
    const listaAtualizada = clientes.map((cliente) =>
      cliente.id === clienteEditandoId
        ? {
            ...cliente,
            nome,
            telefone,
            email,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            complemento,
            referencia,
          }
        : cliente
    )

    salvarClientes(listaAtualizada)
    setClienteEditandoId(null)
  } else {
    const novoCliente = {
      id: Date.now(),
      nome,
      telefone,
      email,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      complemento,
      referencia,
      dataCadastro: new Date().toLocaleDateString("pt-BR"),
    }

    salvarClientes([...clientes, novoCliente])
  }

  setNome("")
  setTelefone("")
  setEmail("")
  setCep("")
  setRua("")
  setNumero("")
  setBairro("")
  setCidade("")
  setComplemento("")
  setReferencia("")
}

  const excluirCliente = (id) => {
    const novaLista = clientes.filter((cliente) => cliente.id !== id)
    salvarClientes(novaLista)
  }

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(busca.toLowerCase())
  )

  const editarCliente = (cliente) => {
  setClienteEditandoId(cliente.id)

  setNome(cliente.nome)
  setTelefone(cliente.telefone)
  setEmail(cliente.email)
  setCep(cliente.cep)
  setRua(cliente.rua)
  setNumero(cliente.numero)
  setBairro(cliente.bairro)
  setCidade(cliente.cidade)
  setComplemento(cliente.complemento)
  setReferencia(cliente.referencia)
}

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
    <label>Nome do cliente *</label>
    <input
      type="text"
      placeholder="Digite o nome do cliente"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>Telefone *</label>
    <input
      type="text"
      placeholder="(00) 00000-0000"
      value={telefone}
      onChange={(e) => setTelefone(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>E-mail</label>
    <input
      type="email"
      placeholder="exemplo@email.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>CEP</label>
    <input
  type="text"
  placeholder="00000-000"
  value={cep}
  onChange={(e) => {
    setCep(e.target.value)
    buscarCep(e.target.value)
  }}
/>
  </div>

  <div className="form-group">
    <label>Rua *</label>
    <input
      type="text"
      placeholder="Nome da rua"
      value={rua}
      onChange={(e) => setRua(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>Número *</label>
    <input
      type="text"
      placeholder="123"
      value={numero}
      onChange={(e) => setNumero(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>Bairro *</label>
    <input
      type="text"
      placeholder="Nome do bairro"
      value={bairro}
      onChange={(e) => setBairro(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>Cidade *</label>
    <input
      type="text"
      placeholder="Cidade"
      value={cidade}
      onChange={(e) => setCidade(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label>Complemento</label>
    <input
      type="text"
      placeholder="Casa, apto, bloco..."
      value={complemento}
      onChange={(e) => setComplemento(e.target.value)}
    />
  </div>

  <div className="form-group referencia-group">
    <label>Referência obrigatória *</label>
    <textarea
  placeholder="Ex: casa azul, próximo à farmácia, portão branco..."
  value={referencia}
  onChange={(e) => setReferencia(e.target.value)}
/>
  </div>

  <button
  className={`btn add-client-btn ${clienteEditandoId ? "editing" : ""}`}
  onClick={adicionarCliente}
>
  {clienteEditandoId ? "Salvar alterações" : "+ Adicionar cliente"}
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
    <th>Endereço</th>
    <th>Referência</th>
    <th>Cadastro</th>
    <th>Ações</th>
  </tr>
</thead>

  <tbody>
  {clientesFiltrados.map((cliente) => (
    <tr key={cliente.id}>
      <td>{cliente.nome}</td>

      <td>{cliente.telefone}</td>

      <td
        title={`${cliente.rua}, ${cliente.numero} - ${cliente.bairro}, ${cliente.cidade}`}
      >
        {cliente.rua}, {cliente.numero} - {cliente.bairro}
      </td>

      <td>{cliente.referencia}</td>

      <td>{cliente.dataCadastro}</td>

      <td>
        <button
  className="edit-btn"
  onClick={() => editarCliente(cliente)}
>
  Editar
</button>

        <button
          className="delete-btn"
          onClick={() => {
  if (window.confirm("Deseja realmente excluir este cliente?")) {
    excluirCliente(cliente.id)
  }
}}
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