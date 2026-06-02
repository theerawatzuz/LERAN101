import styles from "./Nav.module.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <span className={styles.logo}>Nattapong</span>
      <ul className={styles.menu}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className={styles.link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
