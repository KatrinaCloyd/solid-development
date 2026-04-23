import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1><span data-sr>Solid Development</span> Coming soon... </h1>
        <img src='/SoliD_Navy.png' alt="Solid Development full logo"/>
      </main>
    </div>
  );
}
