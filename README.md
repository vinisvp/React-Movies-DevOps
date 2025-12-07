# React Movies DevOps

Frontend em React para consumir a API de catálogo de filmes do backend Spring Boot.

## 📋 Sobre o Projeto

Aplicação web que permite aos usuários:
- Criar conta com validação de senha segura
- Fazer login no sistema
- Visualizar catálogo de filmes
- Reproduzir filmes (simulação com alert)

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server rápido
- **Axios** - Cliente HTTP para consumir a API
- **CSS-in-JS** - Estilização inline dos componentes

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Backend Spring Boot rodando na porta 8080

### Passos

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd React-Movies-DevOps
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Como Rodar

1. Certifique-se de que o backend está rodando em `http://localhost:8080`

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse a aplicação em: `http://localhost:3000`

## 🔐 Validação de Senha

A senha deve atender aos seguintes critérios:
- Mínimo de 8 caracteres
- Pelo menos uma letra maiúscula
- Pelo menos uma letra minúscula
- Pelo menos um número
- Pelo menos um caractere especial (!@#$%^&*)

## 📋 Campos de Cadastro

- **Nome**: Nome completo do usuário
- **Email**: Email válido (usado para login)
- **Telefone**: Número de telefone
- **Senha**: Senha com validação de segurança

## 📁 Estrutura do Projeto

```
React-Movies-DevOps/
├── src/
│   ├── components/
│   │   ├── Login.jsx          # Tela de login
│   │   ├── Register.jsx       # Tela de criação de conta
│   │   └── MovieCatalog.jsx   # Catálogo de filmes
│   ├── services/
│   │   └── api.js             # Configuração do Axios
│   ├── App.jsx                # Componente principal
│   ├── main.jsx               # Ponto de entrada
│   └── index.css              # Estilos globais
├── index.html                 # HTML base
├── vite.config.js             # Configuração do Vite
├── package.json               # Dependências
└── README.md                  # Documentação
```

## 🎯 Funcionalidades

### ✅ Tela de Login
- Formulário com usuário e senha
- Validação de campos obrigatórios
- Mensagens de erro claras
- Link para criação de conta

### ✅ Criação de Conta
- Validação completa de senha em tempo real
- Mensagens de erro específicas para cada critério não atendido
- Feedback visual de sucesso
- Redirecionamento automático após criação

### ✅ Catálogo de Filmes
- Exibição de todos os atributos dos filmes:
  - Título
  - Sinopse
  - Avaliação
  - Data de lançamento
  - Gêneros
  - Categorias
  - Posters
  - Imagens
  - Trailers
- Layout responsivo em grid
- Botão de reprodução em cada filme

### ✅ Player Simples
- Alert exibindo o nome do filme ao clicar em "Reproduzir"

## 🔧 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 🌐 Configuração da API

A URL base da API está configurada em `src/services/api.js`:

```javascript
baseURL: 'http://localhost:8080/api'
```

Altere conforme necessário para apontar para seu backend.

## 📝 Endpoints Utilizados

- `POST /customer` - Criação de usuário (Customer)
- `POST /auth/log-in` - Autenticação
- `GET /movies` - Listagem de filmes (requer token JWT)

## 👨‍💻 Desenvolvimento

O projeto utiliza Vite para hot reload durante o desenvolvimento. Qualquer alteração nos arquivos será refletida automaticamente no navegador.

## ✨ Critérios de Aceite Atendidos

- ✅ Aplicação roda sem erros de compilação
- ✅ Tela de login e criação de conta implementadas
- ✅ Validação completa da senha com todas as regras
- ✅ Mensagens de erro claras e específicas
- ✅ Consumo da API de catálogo de filmes
- ✅ Exibição de todos os atributos dos filmes
- ✅ Player simples funcionando com alert
- ✅ README.md completo com instruções

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.
