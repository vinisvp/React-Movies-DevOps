import { useState } from 'react';
import { register } from '../services/api';

export default function Register({ onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState('');

  const validatePassword = (pwd) => {
    const errs = [];
    if (pwd.length < 8) errs.push('Senha deve ter no mínimo 8 caracteres');
    if (!/[A-Z]/.test(pwd)) errs.push('Senha deve conter pelo menos uma letra maiúscula');
    if (!/[a-z]/.test(pwd)) errs.push('Senha deve conter pelo menos uma letra minúscula');
    if (!/[0-9]/.test(pwd)) errs.push('Senha deve conter pelo menos um número');
    if (!/[!@#$%^&*]/.test(pwd)) errs.push('Senha deve conter pelo menos um caractere especial (!@#$%^&*)');
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validatePassword(password);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSuccess('');
      return;
    }

    try {
      await register({ name, email, phone, password });
      setSuccess('Conta criada com sucesso! Faça login.');
      setErrors([]);
      setTimeout(() => onSwitchToLogin(), 2000);
    } catch (err) {
      if (err.response?.status === 400) {
        setErrors(['Email já cadastrado ou dados inválidos. Verifique as informações.']);
      } else if (err.code === 'ERR_NETWORK') {
        setErrors(['Erro de conexão. Verifique se o backend está rodando.']);
      } else {
        setErrors([err.response?.data?.message || 'Erro ao criar conta. Tente novamente.']);
      }
      setSuccess('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Criar Conta</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="tel"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          {errors.length > 0 && (
            <div style={styles.errorBox}>
              {errors.map((err, i) => <p key={i} style={styles.error}>{err}</p>)}
            </div>
          )}
          {success && <p style={styles.success}>{success}</p>}
          <button type="submit" style={styles.button}>Criar Conta</button>
        </form>
        <p style={styles.link}>
          Já tem conta? <a onClick={onSwitchToLogin} style={styles.linkText}>Fazer login</a>
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
  errorBox: {
    background: '#fee',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #fcc'
  },
  error: {
    color: '#e74c3c',
    fontSize: '13px',
    margin: '3px 0'
  },
  success: {
    color: '#27ae60',
    fontSize: '14px',
    background: '#efd',
    padding: '10px',
    borderRadius: '5px',
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
