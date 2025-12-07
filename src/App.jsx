import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import MovieCatalog from './components/MovieCatalog';

export default function App() {
  const [token, setToken] = useState(null);
  const [view, setView] = useState('login');

  const handleLogin = (authToken) => {
    setToken(authToken);
  };

  const handleLogout = () => {
    setToken(null);
    setView('login');
  };

  if (token) {
    return <MovieCatalog token={token} onLogout={handleLogout} />;
  }

  return view === 'login' 
    ? <Login onLogin={handleLogin} onSwitchToRegister={() => setView('register')} />
    : <Register onSwitchToLogin={() => setView('login')} />;
}
