import { imgHero } from "../../assets";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* Left — text content */}
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.tagline}>
              IoT Engineering · Full-stack Developer
            </p>
            <h1 className={styles.title}>Nattapong Panthaisong</h1>
            <p className={styles.body}>
              I build practical systems that connect hardware, cloud
              infrastructure, data analytics, and user-friendly web
              applications. Currently studying IoT &amp; Information Engineering
              at KMITL.
            </p>
          </div>
          <a href="#work" className={styles.btn}>
            View Projects
          </a>
        </div>

        {/* Right — portrait */}
        <div className={styles.imageWrapper}>
          <img
            src={imgHero}
            alt="Nattapong Panthaisong"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
