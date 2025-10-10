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
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
