import { useState } from 'react';
import { login } from '../services/api';

export default function Login({ onLogin, onSwitchToRegister }) {
  const [loginOrEmail, setLoginOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await login({ loginOrEmail, password });
      onLogin(data.token);
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        setError('Email ou senha incorretos. Verifique suas credenciais.');
      } else if (err.response?.status === 404) {
        setError('Usuário não encontrado. Verifique o email digitado.');
      } else if (err.code === 'ERR_NETWORK') {
        setError('Erro de conexão. Verifique se o backend está rodando.');
      } else {
        setError(err.response?.data?.message || 'Erro ao fazer login. Tente novamente.');
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Email"
            value={loginOrEmail}
            onChange={(e) => setLoginOrEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Entrar</button>
        </form>
        <p style={styles.link}>
          Não tem conta? <a onClick={onSwitchToRegister} style={styles.linkText}>Criar conta</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  card: {
    background: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    width: '100%',
    maxWidth: '400px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '14px'
  },
  button: {
    padding: '12px',
    background: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  error: {
    color: '#e74c3c',
    fontSize: '14px',
    margin: 0
  },
  link: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px'
  },
  linkText: {
    color: '#667eea',
    cursor: 'pointer',
    textDecoration: 'underline'
  }
};
