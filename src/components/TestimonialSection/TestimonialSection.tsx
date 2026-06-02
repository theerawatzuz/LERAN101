import { imgAvatar, imgStar } from "../../assets";
import styles from "./TestimonialSection.module.css";

const ITEMS = [
  {
    text: "Built a real-time monitoring dashboard for steel factory machines using MQTT, Supabase, and React — deployed and functional.",
    name: "Steel Factory Project",
    role: "Dashboard · IoT",
  },
  {
    text: "Sports analytics tool using Gemini AI and Python to evaluate NBA player performance trends and generate prediction context.",
    name: "NBA Prediction",
    role: "AI · Data Analysis",
  },
  {
    text: "Water quality monitoring system with Raspberry Pi, relay control, Firebase, and a live web dashboard for status tracking.",
    name: "Water Quality System",
    role: "IoT · Hardware",
  },
  {
    text: "Centralized department platform with React frontend, Flask API, PostgreSQL, and content management for academic use.",
    name: "IOTE Platform",
    role: "Full-stack · Platform",
  },
  {
    text: "Responsive student evaluation web app with clean UI, staff workflows, and full API integration built with React and Vite.",
    name: "Student Evaluation App",
    role: "Frontend · React",
  },
  {
    text: "Frontend and backoffice internship at ONE SIAM — homepage sections, SEO updates, API integration, admin dashboard.",
    name: "ONE SIAM Backoffice",
    role: "Internship · TypeScript",
  },
];

function Stars() {
  return (
    <div className={styles.stars} aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <img
          key={i}
          src={imgStar}
          alt=""
          aria-hidden="true"
          className={styles.star}
        />
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Project highlights</h2>
        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <article key={item.name} className={styles.card}>
              <p className={styles.text}>{item.text}</p>
              <div className={styles.footer}>
                <img
                  src={imgAvatar}
                  alt=""
                  aria-hidden="true"
                  className={styles.avatar}
                />
                <div className={styles.meta}>
                  <Stars />
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.role}>{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
