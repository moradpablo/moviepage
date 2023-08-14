import React from 'react';
import styles from './LoadingCircle.module.css';

function LoadingCircle() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingCircle}></div>
    </div>
  );
}

export default LoadingCircle;
