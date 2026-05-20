import { entregas } from '../data/mock'

function Entregas() {
  return (
    <div>
      <h1>Entregas</h1>

      <div style={{ marginTop: '20px' }}>
        {entregas.map((item) => (
          <div key={item.id} style={card}>
            <h3>{item.cliente}</h3>

            <p><strong>Status:</strong> {item.status}</p>
            <p><strong>Região:</strong> {item.regiao}</p>
            <p><strong>Horário:</strong> {item.horario}</p>
            <p><strong>Entregador:</strong> {item.entregador || 'Não definido'}</p>
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

export default Entregas