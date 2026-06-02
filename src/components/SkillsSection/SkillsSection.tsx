import { imgSkillIcon1, imgSkillIcon2, imgSkillIcon3 } from "../../assets";
import styles from "./SkillsSection.module.css";

const SKILLS = [
  {
    icon: imgSkillIcon1,
    title: "Full-stack Development",
    description:
      "Building end-to-end web applications with React, TypeScript, Flask, and REST APIs — from UI to database.",
  },
  {
    icon: imgSkillIcon2,
    title: "IoT Systems",
    description:
      "Connecting hardware (Arduino, Raspberry Pi) to cloud platforms using MQTT, sensors, and real-time dashboards.",
  },
  {
    icon: imgSkillIcon3,
    title: "AI & Automation",
    description:
      "Applying Gemini AI, prediction models, and data analysis to solve practical engineering problems.",
  },
];

export default function SkillsSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {SKILLS.map((skill) => (
          <article key={skill.title} className={styles.card}>
            <div className={styles.iconBox}>
              <img
                src={skill.icon}
                alt=""
                aria-hidden="true"
                className={styles.icon}
              />
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>{skill.title}</h3>
              <p className={styles.desc}>{skill.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
