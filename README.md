# 🐶 HabPet Web App

### Login
- Criar uma conta com e-mail e senha
- Verificação de e-mail (link para validar a conta)
- Deslogar (Manual e Automático)

### Hábitos
- Criar um novo hábito
- Editar um hábito
- Deletar um hábito

### Configuração de hábito
- Nome do hábito
- Frequência (dia/semana/mês)
- Quantidade da frequência
- Duração
- Tempo de vida do hábito (eterno/limitado)

### Configuração de importância/relevância dos hábitos
- Só poderá haver 3 hábitos em aprendizado
- Classificar esses hábitos em order de importância
	- Hábitos mais importantes valem mais pontos de saúde pro pet
	- Cada hábito representa um cuidado com seu pet
		- Comida Nvl 1
		- Banho Nvl 2
		- Brincar Nvl 3
- Hábitos já aprendidos subirão de nível

### Configuração do pet
- Nome
- Animal (Dog, Cat, Etc)

### Funcionamento
- Marcar uma etapa como finalizada
- Desmarcar uma etapa como finalizada
- Manda notificação de lembrete para concluir o hábito
- Hábitos devem ser completados até 23:59 do dia atual

### Saúde do Pet
- Todo pet começa com 50 pontos de saúde como máximo de 100 pontos
- Hábitos não concluídos diminuem os pontos de saúde do pet
	- Hábito Nvl 1 - Perde 10 - Ganho 3
	- Hábito Nvl 2 - Perde 5 - Ganho 2
	- Hábito Nvl 3 - Perde 3 - Ganho 1
- Se os pontos de saúde chegarem a 0
	- O pet vai de berço
	- O pet não poderá ser escolhido novamente
	- Novo pet escolhido começa com a saúde de 30 pontos
