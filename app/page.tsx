"use client";
import Dashboard from "./Dashboard";
import Login from "./Login";
import styles from "./page.module.css";

const code = new URLSearchParams(window.location.search).get("code");

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Bekkify</p>
      </div>
      {code ? <Dashboard code={code} /> : <Login />}
      <div className={styles.grid}></div>
    </main>
  );
}
