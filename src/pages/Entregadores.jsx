import { entregadores } from '../data/mock'

function Entregadores() {
  return (
    <div>
      <h1>Entregadores</h1>

      <div style={{ marginTop: '20px' }}>
        {entregadores.map((item) => (
          <div key={item.id} style={card}>
            <h3>{item.nome}</h3>

            <p><strong>Telefone:</strong> {item.telefone}</p>
            <p><strong>Veículo:</strong> {item.veiculo}</p>
            <p><strong>Status:</strong> {item.status}</p>
            <p><strong>Entregas hoje:</strong> {item.entregas_hoje}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const card = {
  background: '#fff',
  padding: '20px',
  borderRadius: '12px',
  marginBottom: '15px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

export default Entregadores