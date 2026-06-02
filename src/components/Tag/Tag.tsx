import styles from "./Tag.module.css";

interface TagProps {
  children: React.ReactNode;
  accent?: boolean;
}

export default function Tag({ children, accent = false }: TagProps) {
  return (
    <span className={`${styles.tag} ${accent ? styles.accent : ""}`}>
      {children}
    </span>
  );
}
