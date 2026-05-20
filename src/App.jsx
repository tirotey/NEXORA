import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Entregas from './pages/Entregas'
import Entregadores from './pages/Entregadores'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="entregas" element={<Entregas />} />
          <Route path="entregadores" element={<Entregadores />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App