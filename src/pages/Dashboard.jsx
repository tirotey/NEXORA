import { entregas, entregadores } from '../data/mock'

function Dashboard() {
  const pendentes = entregas.filter(
    (e) => e.status === 'Pendente'
  ).length

  const rota = entregas.filter(
    (e) => e.status === 'Em rota'
  ).length

  const atrasadas = entregas.filter(
    (e) => e.status === 'Atrasada'
  ).length

  return (
    <div>
      <h1>Dashboard</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        <div style={card}>
          <h3>Pendentes</h3>
          <p>{pendentes}</p>
        </div>

        <div style={card}>
          <h3>Em rota</h3>
          <p>{rota}</p>
        </div>

        <div style={card}>
          <h3>Atrasadas</h3>
          <p>{atrasadas}</p>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>Entregadores ativos</h2>

        {entregadores.map((item) => (
          <div key={item.id} style={listItem}>
            <strong>{item.nome}</strong> — {item.status}
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
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}

const listItem = {
  background: '#fff',
  padding: '15px',
  marginTop: '10px',
  borderRadius: '10px',
}

export default Dashboard