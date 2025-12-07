# 🎬 Instruções de Uso - React Movies DevOps

## 🚀 Início Rápido

### 1. Iniciar o Backend (Spring Boot)
```bash
cd Spring-Movies-DevOps
mvn spring-boot:run
```
O backend deve estar rodando em: `http://localhost:8080`

### 2. Iniciar o Frontend (React)
```bash
cd React-Movies-DevOps
npm run dev
```
O frontend estará disponível em: `http://localhost:3000`

## 📝 Fluxo de Uso

### Passo 1: Criar uma Conta
1. Acesse `http://localhost:3000`
2. Clique em "Criar conta"
3. Preencha os campos:
   - **Nome**: Seu nome completo
   - **Email**: Email válido (será usado para login)
   - **Telefone**: Seu telefone
   - **Senha**: Senha que atenda aos critérios:
     - ✅ Mínimo 8 caracteres
     - ✅ Pelo menos 1 letra maiúscula
     - ✅ Pelo menos 1 letra minúscula
     - ✅ Pelo menos 1 número
     - ✅ Pelo menos 1 caractere especial (!@#$%^&*)
   
   **Exemplo de senha válida:** `Senha@123`

4. Clique em "Criar Conta"
5. Aguarde a mensagem de sucesso e redirecionamento

### Passo 2: Fazer Login
1. Digite o email cadastrado
2. Digite a senha
3. Clique em "Entrar"

### Passo 3: Visualizar Filmes
1. Após o login, você verá o catálogo de filmes
2. Cada filme exibe:
   - Poster (imagem)
   - Título
   - Data de lançamento
   - Avaliação
   - Gêneros
   - Categorias
   - Sinopse

### Passo 4: Reproduzir um Filme
1. Clique no botão "▶ Reproduzir" em qualquer filme
2. Um alert aparecerá com a mensagem: "Reproduzindo: [Nome do Filme]"

### Passo 5: Sair
1. Clique no botão "Sair" no canto superior direito
2. Você será redirecionado para a tela de login

## ⚠️ Solução de Problemas

### Erro de Conexão com a API
- Verifique se o backend está rodando na porta 8080
- Verifique se não há firewall bloqueando a conexão
- Confirme que a URL da API em `src/services/api.js` está correta

### Erro ao Criar Conta
- Verifique se a senha atende a todos os critérios
- Verifique se o usuário já não existe no banco de dados

### Página em Branco
- Abra o console do navegador (F12) para ver erros
- Verifique se todas as dependências foram instaladas (`npm install`)
- Tente limpar o cache e recarregar a página (Ctrl+Shift+R)

## 🧪 Testando a Validação de Senha

### Senhas Inválidas (para testar mensagens de erro):
- `abc` - Muito curta
- `abcdefgh` - Sem maiúscula, número e especial
- `Abcdefgh` - Sem número e especial
- `Abcdefg1` - Sem caractere especial
- `ABCDEF@1` - Sem letra minúscula

### Senhas Válidas:
- `Senha@123`
- `Admin!2024`
- `Test#Pass1`
- `MyP@ssw0rd`

## 📊 Dados de Exemplo

Se o backend estiver vazio, você pode adicionar filmes através da API REST ou diretamente no banco de dados para testar a visualização.

## 🎯 Checklist de Funcionalidades

- ✅ Tela de login funcional
- ✅ Tela de criação de conta funcional
- ✅ Validação de senha com todas as regras
- ✅ Mensagens de erro específicas e claras
- ✅ Consumo da API de filmes
- ✅ Exibição de todos os atributos dos filmes
- ✅ Player simples com alert
- ✅ Botão de logout
- ✅ Design responsivo
- ✅ Sem erros de compilação

## 💡 Dicas

- Use o DevTools do navegador (F12) para inspecionar requisições HTTP
- A autenticação usa JWT (JSON Web Token)
- O token é armazenado apenas em memória (não persiste após refresh)
- Para desenvolvimento, você pode usar extensões como React DevTools

## 📞 Suporte

Em caso de dúvidas ou problemas:
1. Verifique os logs do backend
2. Verifique o console do navegador
3. Confirme que todas as dependências estão instaladas
4. Verifique se as portas 3000 e 8080 estão disponíveis
