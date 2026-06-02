import {
  imgSteelFactory,
  imgNBA,
  imgWaterQuality,
  imgIOTE,
  imgStudentEval,
  imgOneSiam,
} from "../../assets";
import styles from "./GallerySection.module.css";

const PROJECTS = [
  {
    img: imgSteelFactory,
    title: "Steel Factory Energy Monitoring",
    tags: "Dashboard · IoT",
    href: "#",
  },
  {
    img: imgNBA,
    title: "NBA Performance Prediction",
    tags: "AI · Data Analysis",
    href: "#",
  },
  {
    img: imgWaterQuality,
    title: "Water Quality Monitoring",
    tags: "IoT · Raspberry Pi",
    href: "#",
  },
  {
    img: imgIOTE,
    title: "IOTE Department Platform",
    tags: "Full-stack · Platform",
    href: "#",
  },
  {
    img: imgStudentEval,
    title: "Student Evaluation Web App",
    tags: "Frontend · React",
    href: "#",
  },
  {
    img: imgOneSiam,
    title: "ONE SIAM Backoffice",
    tags: "Internship · TypeScript",
    href: "#",
  },
];

export default function GallerySection() {
  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Latest work</h2>
        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <a key={p.title} href={p.href} className={styles.card}>
              <div className={styles.imgWrapper}>
                <img src={p.img} alt={p.title} className={styles.img} />
              </div>
              <div className={styles.info}>
                <p className={styles.title}>{p.title}</p>
                <p className={styles.tags}>{p.tags}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
