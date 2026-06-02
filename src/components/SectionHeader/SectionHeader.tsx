import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  number: string;
  label: string;
  heading: string;
}

export default function SectionHeader({
  number,
  label,
  heading,
}: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.meta}>
        <span className={styles.number}>{number}</span>
        <span className={styles.label}>{label}</span>
      </div>
      <h2 className={styles.heading}>{heading}</h2>
    </div>
  );
}
