import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>Nattapong Panthaisong</span>
        <span>Built with React + Vite + TypeScript</span>
      </div>
    </footer>
  );
}
