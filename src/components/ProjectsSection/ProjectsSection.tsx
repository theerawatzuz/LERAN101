import styles from "./ProjectsSection.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import Tag from "../Tag/Tag";
import {
  imgSteelFactory,
  imgNBA,
  imgWaterQuality,
  imgIOTE,
  imgStudentEval,
  imgOneSiam,
} from "../../assets";

interface Project {
  number: string;
  img: string;
  category: string;
  title: string;
  desc: string;
  tags: string[];
}

const projects: Project[] = [
  {
    number: "03 / 01",
    img: imgSteelFactory,
    category: "Dashboard",
    title: "Steel Factory Energy Monitoring",
    desc: "Real-time energy consumption dashboard for a steel manufacturing plant. Tracks machine-level power usage, alerts on anomalies, and exports daily reports.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API", "Recharts"],
  },
  {
    number: "03 / 02",
    img: imgNBA,
    category: "AI",
    title: "NBA Performance Prediction",
    desc: "Machine learning pipeline to predict player performance outcomes using historical game stats. Built with Python, scikit-learn, and a Flask API layer.",
    tags: ["Python", "scikit-learn", "Flask", "Data Analysis"],
  },
  {
    number: "03 / 03",
    img: imgWaterQuality,
    category: "IoT",
    title: "Water Quality Monitoring",
    desc: "IoT system with physical sensors measuring pH, turbidity, and temperature. Data streamed via MQTT to a cloud dashboard with real-time alerts.",
    tags: ["Arduino", "MQTT", "EMQX", "Node-RED", "Supabase"],
  },
  {
    number: "03 / 04",
    img: imgIOTE,
    category: "Platform",
    title: "IOTE Department Platform",
    desc: "Internal department web platform for KMITL IoT Engineering faculty — course listing, event announcements, and student resource management.",
    tags: ["React", "TypeScript", "Vite", "Supabase"],
  },
  {
    number: "03 / 05",
    img: imgStudentEval,
    category: "Frontend",
    title: "Student Evaluation Web App",
    desc: "Web application for peer-evaluation and faculty grading workflows. Supports multi-criteria scoring, rubrics, and printable summary sheets.",
    tags: ["React", "CSS Modules", "TypeScript"],
  },
  {
    number: "03 / 06",
    img: imgOneSiam,
    category: "Internship",
    title: "ONE SIAM Backoffice",
    desc: "Internship project — backoffice management system for ONE SIAM's retail operations including product catalog, promotions, and reporting tools.",
    tags: ["React", "REST API", "Node.js", "MongoDB"],
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          number="03"
          label="Selected Projects"
          heading="Additional work across dashboards, AI, and internal platforms."
        />

        <div className={styles.grid}>
          {projects.map((proj) => (
            <article className={styles.card} key={proj.number}>
              <div className={styles.imageWrap}>
                <img
                  src={proj.img}
                  alt={proj.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardNumber}>{proj.number}</span>
                  <Tag accent>{proj.category}</Tag>
                </div>
                <h3 className={styles.cardTitle}>{proj.title}</h3>
                <p className={styles.cardDesc}>{proj.desc}</p>
                <div className={styles.tags}>
                  {proj.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              <div className={styles.cardButtons}>
                <a href="#" className={styles.btnSmall}>
                  View Web
                </a>
                <a
                  href="#"
                  className={`${styles.btnSmall} ${styles.btnSmallAccent}`}
                >
                  Read PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
