import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.container}>
      <h1>Home</h1>

      <div className={styles.items}>
        <div className={styles.cards}></div>
        <div className={styles.cards}></div>
      </div>
    </section>
  );
}

export default Home;
