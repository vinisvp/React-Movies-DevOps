export default function MoviePage({ movie, onBack }) {
  const playMovie = () => {
    alert(`Reproduzindo: ${movie.title}`);
  };

  return (
    <div style={styles.container}>
      <button onClick={onBack} style={styles.backBtn}>← Voltar</button>
      <div style={styles.content}>
        {movie.posters?.[0] && <img src={movie.posters[0]} alt={movie.title} style={styles.poster} />}
        <div style={styles.details}>
          <h1 style={styles.title}>{movie.title}</h1>
          {movie.rating && <p><strong>Avaliação:</strong> {movie.rating}/10</p>}
          {movie.release && <p><strong>Lançamento:</strong> {new Date(movie.release).toLocaleDateString('pt-BR')}</p>}
          {movie.genres?.length > 0 && <p><strong>Gêneros:</strong> {movie.genres.map(g => g.name).join(', ')}</p>}
          {movie.categories?.length > 0 && <p><strong>Categorias:</strong> {movie.categories.map(c => c.name).join(', ')}</p>}
          {movie.synopsis && <p style={styles.synopsis}><strong>Sinopse:</strong> {movie.synopsis}</p>}
          {movie.images?.length > 0 && (
            <div style={styles.images}>
              {movie.images.map((img, i) => <img key={i} src={img} alt="" style={styles.image} />)}
            </div>
          )}
          {movie.trailers?.length > 0 && (
            <div>
              <strong>Trailers:</strong>
              {movie.trailers.map((trailer, i) => <p key={i}>{trailer}</p>)}
            </div>
          )}
          <button onClick={playMovie} style={styles.playBtn}>▶ Reproduzir</button>
        </div>
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
  backBtn: {
    padding: '10px 20px',
    background: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px'
  },
  content: {
    display: 'flex',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  poster: {
    width: '400px',
    height: '600px',
    objectFit: 'cover',
    borderRadius: '10px'
  },
  details: {
    flex: 1
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px'
  },
  synopsis: {
    lineHeight: '1.6',
    marginTop: '20px'
  },
  images: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
    flexWrap: 'wrap'
  },
  image: {
    width: '150px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '5px'
  },
  playBtn: {
    marginTop: '30px',
    padding: '15px 40px',
    background: '#e50914',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};
