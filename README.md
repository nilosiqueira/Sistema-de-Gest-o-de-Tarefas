Sistema de Gestão de Tarefas
Este é um projeto de aplicação web para gerenciamento de tarefas, desenvolvido com Node.js, Express.js e MongoDB. Ele permite criar, listar, atualizar e excluir tarefas através de uma API RESTful.

🛠️ Tecnologias Utilizadas
Back-end: Node.js, Express.js, MongoDB, Mongoose
Gerenciador de Pacotes: npm
Outros: dotenv (configuração de variáveis de ambiente)
📂 Estrutura do Projeto
plaintext
Copiar código
/task-manager
  ├── backend
  │   ├── config              # Configuração de conexão com o BD
  │   ├── controllers         # Lógica de controle
  │   ├── models              # Modelos do banco de dados
  │   ├── routes              # Definição das rotas
  │   ├── middleware          # Middleware de erros
  │   ├── .env                # Variáveis de ambiente
  │   ├── server.js           # Configuração do servidor
  │   └── package.json        # Configuração do projeto
  └── README.md               # Documentação do projeto
📦 Pré-requisitos
Node.js - Instalar Node.js
MongoDB - Local ou através de um serviço na nuvem como MongoDB Atlas
Git (opcional) - Para controle de versão
🚀 Como Rodar o Projeto
1. Clonar o Repositório
bash
Copiar código
git clone https://github.com/seu-usuario/task-manager.git
cd task-manager/backend
2. Instalar Dependências
bash
Copiar código
npm install
3. Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz da pasta backend com o seguinte conteúdo:

plaintext
Copiar código
PORT=5000
MONGO_URI=mongodb+srv://<seu-usuario>:<sua-senha>@cluster.mongodb.net/task-manager
NODE_ENV=development
⚠️ Importante: Substitua <seu-usuario> e <sua-senha> pelos seus dados do MongoDB Atlas.

4. Rodar o Servidor
bash
Copiar código
npm start
O servidor estará rodando em:
http://localhost:5000

📋 Rotas Disponíveis
1. Tarefas
Método	Rota	Descrição
GET	/api/tasks	Lista todas as tarefas
POST	/api/tasks	Cria uma nova tarefa
GET	/api/tasks/:id	Busca uma tarefa por ID
PUT	/api/tasks/:id	Atualiza uma tarefa
DELETE	/api/tasks/:id	Remove uma tarefa
📝 Melhorias Futuras
Implementação de autenticação JWT
Interface gráfica usando React.js
Testes automatizados
🤝 Contribuição
Faça um fork do projeto
Crie uma branch: git checkout -b feature-minha-feature
Realize o commit: git commit -m "Adiciona nova feature"
Envie as alterações: git push origin feature-minha-feature
Abra um Pull Request
📄 Licença
Este projeto está sob a licença MIT.
