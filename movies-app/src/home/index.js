import React, { useEffect, useState } from 'react';
import MovieCards from '../cards/MovieCards';
import styles from './home.module.css';
import getHttp from '../utils/httpsClient';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getHttp('/discover/movie').then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <ul className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCards key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default Home;
