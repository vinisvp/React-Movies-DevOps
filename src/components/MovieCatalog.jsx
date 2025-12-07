import { useState, useEffect } from 'react';
import { getMovies } from '../services/api';

export default function MovieCatalog({ token, onLogout }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const { data } = await getMovies(token);
      setMovies(data);
      setLoading(false);
    } catch (err) {
      setError('Erro ao carregar filmes');
      setLoading(false);
    }
  };

  const playMovie = (movie) => {
    alert(`Reproduzindo: ${movie.title}`);
  };

  if (loading) return <div style={styles.loading}>Carregando...</div>;
  if (error) return <div style={styles.error}>{error}</div>;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Catálogo de Filmes</h1>
        <button onClick={onLogout} style={styles.logoutBtn}>Sair</button>
      </header>
      <div style={styles.grid}>
        {movies.map((movie) => (
          <div key={movie.id} style={styles.card}>
            {movie.posters?.[0] && <img src={movie.posters[0]} alt={movie.title} style={styles.poster} />}
            <h3 style={styles.title}>{movie.title}</h3>
            <div style={styles.info}>
              {movie.release && <p><strong>Lançamento:</strong> {new Date(movie.release).toLocaleDateString('pt-BR')}</p>}
              {movie.rating && <p><strong>Avaliação:</strong> {movie.rating}/10</p>}
              {movie.genres?.length > 0 && <p><strong>Gêneros:</strong> {movie.genres.map(g => g.name).join(', ')}</p>}
              {movie.categories?.length > 0 && <p><strong>Categorias:</strong> {movie.categories.map(c => c.name).join(', ')}</p>}
            </div>
            {movie.synopsis && <p style={styles.description}>{movie.synopsis}</p>}
            <button onClick={() => playMovie(movie)} style={styles.playBtn}>
              ▶ Reproduzir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#141414',
    color: 'white',
    padding: '20px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    padding: '0 20px'
  },
  logoutBtn: {
    padding: '10px 20px',
    background: '#e50914',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '0 20px'
  },
  card: {
    background: '#222',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  },
  poster: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px'
  },
  title: {
    margin: '0 0 15px 0',
    fontSize: '20px',
    color: '#fff'
  },
  info: {
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '15px'
  },
  description: {
    fontSize: '13px',
    color: '#aaa',
    marginBottom: '15px',
    lineHeight: '1.5'
  },
  playBtn: {
    width: '100%',
    padding: '12px',
    background: '#e50914',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontSize: '24px',
    color: 'white',
    background: '#141414'
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontSize: '20px',
    color: '#e50914',
    background: '#141414'
  }
};
