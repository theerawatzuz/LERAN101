import styles from "./ExperienceSection.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import Tag from "../Tag/Tag";

interface ExperienceItem {
  number: string;
  period: string;
  org: string;
  role: string;
  desc: string;
  tags: string[];
}

const items: ExperienceItem[] = [
  {
    number: "06 / 01",
    period: "2022 — Present",
    org: "KMITL",
    role: "Bachelor of Engineering — IoT & Information Engineering",
    desc: "Coursework in embedded systems, cloud computing, full-stack development, AI/ML, and network infrastructure. Active in departmental projects and engineering competitions.",
    tags: ["IoT Engineering", "Full-stack", "AI", "Embedded Systems"],
  },
  {
    number: "06 / 02",
    period: "2024",
    org: "ONE SIAM Co., Ltd.",
    role: "Software Developer Intern",
    desc: "Developed and maintained internal backoffice tools for retail operations. Worked with React, Node.js and REST APIs to deliver product management and reporting features.",
    tags: ["React", "Node.js", "MongoDB", "REST API", "Internship"],
  },
  {
    number: "06 / 03",
    period: "2023 — 2024",
    org: "Key Achievements",
    role: "Competitions & Recognition",
    desc: "Innovation Pitch 1st Runner-up at KMITL Engineering Expo. Participant in True CyberSafe Hackathon. Multiple departmental project awards for IoT and web development work.",
    tags: ["Innovation Pitch", "Hackathon", "Awards"],
  },
];

export default function ExperienceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          number="06"
          label="Education & Experience"
          heading="Academic path, internship work, and key milestones."
        />

        <div className={styles.list}>
          {items.map((item) => (
            <article className={styles.row} key={item.number}>
              <div className={styles.rowLeft}>
                <span className={styles.rowNumber}>{item.number}</span>
                <span className={styles.rowPeriod}>{item.period}</span>
              </div>
              <div className={styles.rowContent}>
                <h3 className={styles.rowOrg}>{item.org}</h3>
                <p className={styles.rowRole}>{item.role}</p>
                <p className={styles.rowDesc}>{item.desc}</p>
                <div className={styles.rowTags}>
                  {item.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
