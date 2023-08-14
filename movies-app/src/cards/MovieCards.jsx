import styles from './cards.module.css';
import { Link } from 'react-router-dom';

function MovieCards({ movie }) {
  const imgUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={'/movies/' + movie.id}>
        <img className={styles.movieImg} src={imgUrl} alt={movie.title}></img>
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
export default MovieCards;
