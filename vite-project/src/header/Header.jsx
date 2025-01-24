import { Github } from 'lucide-react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <div className={styles.head}>
        <img className={styles.posimg} src="/Logo.svg" alt="" />
        <nav className={styles.nav}>
          <ul className={styles.spisok}>
            <NavLink className={styles.li} to="/">
              Home
            </NavLink>
            <NavLink className={styles.li} to="/About">
              About us
            </NavLink>
            <NavLink className={styles.li} to="/Developers">
              Developers
            </NavLink>
            <NavLink className={styles.li} to="/CardsTemp">
              fggfgf
            </NavLink>
          </ul>
          <button
            className={styles.button}
            onClick={() => {
              window.open("https://github.com/ReeneQo/hakawt", "_blank");
            }}
          >
            {" "}
            <Github /> GitHub{" "}
          </button>
        </nav>
      </div>
    </header>
  );
}
