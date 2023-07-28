import React from 'react';
import movies from '../movies.json';
import MovieCards from '../cards/MovieCards';
import styles from './home.module.css';

function Home() {
  return (
    <ul className={styles.movieGrid}>
      {movies.map((movie) => {
        return <MovieCards key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}

export default Home;
