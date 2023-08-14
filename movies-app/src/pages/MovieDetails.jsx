import React, { useEffect, useState } from 'react';
import styles from './MovieDetails.module.css';
import { useParams } from 'react-router-dom';
import getHttp from '../utils/httpsClient';
import LoadingCircle from '../Shared/loadingCircle';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    getHttp(`/movie/${movieId}`).then((data) => {
      setMovieDetails(data);
    });
  }, [movieId]);

  if (!movieDetails) {
    return <LoadingCircle />;
  }

  const imgUrl = 'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path;

  return (
    <div className={styles.detailsContainer}>
      <img className={styles.columns} src={imgUrl} alt={movieDetails.title} />
      <div className={styles.columns}>
        <p>
          <strong>Title: </strong> {movieDetails.title}
        </p>
        <p>
          <strong>Description: </strong> {movieDetails.overview}
        </p>
        <p>
          <strong>Score: </strong> {movieDetails.vote_average}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
