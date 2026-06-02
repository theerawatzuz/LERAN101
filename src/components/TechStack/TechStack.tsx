import styles from "./TechStack.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import Tag from "../Tag/Tag";

interface TechCategory {
  number: string;
  title: string;
  items: string[];
}

const categories: TechCategory[] = [
  {
    number: "04 / 01",
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    number: "04 / 02",
    title: "Backend",
    items: [
      "Python",
      "Flask",
      "Node.js",
      "REST API",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
    ],
  },
  {
    number: "04 / 03",
    title: "IoT",
    items: ["Arduino", "Raspberry Pi", "MQTT", "EMQX", "Sensors", "Node-RED"],
  },
  {
    number: "04 / 04",
    title: "AI & Tools",
    items: [
      "Gemini AI",
      "Data Analysis",
      "Prediction Systems",
      "Git",
      "GitHub",
      "Figma",
      "n8n",
    ],
  },
];

export default function TechStack() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          number="04"
          label="Tech Stack"
          heading="Tools used across interface, backend, hardware, and AI workflows."
        />

        <div className={styles.grid}>
          {categories.map((cat) => (
            <article className={styles.article} key={cat.number}>
              <div className={styles.articleHeader}>
                <span className={styles.articleNumber}>{cat.number}</span>
                <h3 className={styles.articleTitle}>{cat.title}</h3>
              </div>
              <div className={styles.techList}>
                {cat.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
