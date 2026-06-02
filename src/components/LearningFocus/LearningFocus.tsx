import styles from "./LearningFocus.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import Tag from "../Tag/Tag";

interface FocusCard {
  number: string;
  icon: string;
  title: string;
  desc: string;
  tags: string[];
}

const cards: FocusCard[] = [
  {
    number: "05 / 01",
    icon: "⚡",
    title: "Full-stack Development",
    desc: "Deepening knowledge of React, TypeScript, and backend APIs. Currently exploring server-side rendering patterns and edge deployment.",
    tags: ["React", "TypeScript", "Node.js", "Supabase"],
  },
  {
    number: "05 / 02",
    icon: "📡",
    title: "IoT Systems",
    desc: "Building end-to-end IoT pipelines from sensor hardware through MQTT brokers to cloud dashboards with real-time visualizations.",
    tags: ["MQTT", "Raspberry Pi", "Node-RED", "EMQX"],
  },
  {
    number: "05 / 03",
    icon: "🤖",
    title: "AI & Automation",
    desc: "Applying machine learning models to real sensor data and automating workflows using Gemini AI, n8n, and prediction pipelines.",
    tags: ["Gemini AI", "n8n", "Python", "Prediction Systems"],
  },
];

export default function LearningFocus() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          number="05"
          label="Learning Focus"
          heading="What I am studying and building deeper right now."
        />

        <div className={styles.grid}>
          {cards.map((card) => (
            <article className={styles.card} key={card.number}>
              <span className={styles.cardNumber}>{card.number}</span>
              <span className={styles.cardIcon}>{card.icon}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <div className={styles.cardTags}>
                {card.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
