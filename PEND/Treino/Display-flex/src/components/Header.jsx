import styles from "./Header.module.css";

import { useState } from "react";

import { Link } from "react-router-dom";

function Header() {
  const [menuMobile, setMenuMobile] = useState(false);

  console.log(menuMobile);

  return (
    <header className={styles.header}>
      <div
        className={`${styles.navIcon} ${menuMobile ? styles.navOpen : ""}`}
        onClick={() => {
          setMenuMobile(!menuMobile);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav>
        <ul
          className={`${styles.navLinks} ${menuMobile ? styles.navOpen : ""}`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
