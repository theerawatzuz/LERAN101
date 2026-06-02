import styles from "./EducationSection.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import Tag from "../Tag/Tag";

const bottomTags = [
  "IoT Engineering Student",
  "Full-stack Developer",
  "AI & Automation Enthusiast",
  "KMITL",
];

export default function EducationSection() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <SectionHeader
          number="01"
          label="Education"
          heading="Currently studying at King Mongkut's Institute of Technology Ladkrabang."
        />

        <article className={styles.card}>
          <div className={styles.cardTop}>
            <span className={styles.cardNumber}>01 / 01</span>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.schoolInfo}>
              <h3 className={styles.school}>KMITL</h3>
              <p className={styles.dept}>
                King Mongkut's Institute of Technology Ladkrabang
              </p>
              <p className={styles.program}>
                Department of IoT &amp; Information Engineering
              </p>
            </div>
            <div className={styles.yearBadge}>2022 — Present</div>
          </div>
          <div className={styles.cardFooter}>
            {bottomTags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
