import styles from './cards.module.css';

function MovieCards({ movie }) {
  const imgUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <img className={styles.movieImg} src={imgUrl} alt={movie.title}></img>
      <div>{movie.title}</div>
    </li>
  );
}
export default MovieCards;
