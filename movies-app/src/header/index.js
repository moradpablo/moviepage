import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link to="/">
        {' '}
        <h1>Movies</h1>
      </Link>
    </div>
  );
}

export default Header;
