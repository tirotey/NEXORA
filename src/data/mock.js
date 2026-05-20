export const entregas = [
  { id: 1, cliente: 'Mariana Souza', endereco: 'Rua Visconde de Pirajá, 414 — Ipanema', telefone: '21 99201-3847', regiao: 'Zona Sul', prioridade: 'alta', status: 'Em rota', entregador: 'Carlos Mota', horario: '09:15' },
  { id: 2, cliente: 'Roberto Alves', endereco: 'Av. Nossa Sra. de Copacabana, 680 — Copacabana', telefone: '21 98734-1120', regiao: 'Zona Sul', prioridade: 'normal', status: 'Pendente', entregador: null, horario: '10:00' },
  { id: 3, cliente: 'Fernanda Lima', endereco: 'Rua Conde de Bonfim, 220 — Tijuca', telefone: '21 97652-0093', regiao: 'Tijuca', prioridade: 'alta', status: 'Entregue', entregador: 'Paulo Silva', horario: '08:30' },
  { id: 4, cliente: 'Jorge Mendes', endereco: 'Av. das Américas, 3900 — Barra da Tijuca', telefone: '21 99341-7765', regiao: 'Barra', prioridade: 'normal', status: 'Pendente', entregador: null, horario: '11:00' },
  { id: 5, cliente: 'Aline Costa', endereco: 'Rua Uruguaiana, 10 — Centro', telefone: '21 98821-4432', regiao: 'Centro', prioridade: 'baixa', status: 'Atrasada', entregador: 'Carlos Mota', horario: '08:00' },
]

export const entregadores = [
  { id: 1, nome: 'Carlos Mota', telefone: '21 99100-2233', veiculo: 'Moto', status: 'Em rota', entregas_hoje: 3 },
  { id: 2, nome: 'Paulo Silva', telefone: '21 98800-1122', veiculo: 'Moto', status: 'Disponível', entregas_hoje: 5 },
  { id: 3, nome: 'Lucas Ferreira', telefone: '21 97700-4455', veiculo: 'Bicicleta', status: 'Disponível', entregas_hoje: 2 },
]