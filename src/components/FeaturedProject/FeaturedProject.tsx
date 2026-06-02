import styles from "./FeaturedProject.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import Tag from "../Tag/Tag";
import { imgSolarAOI } from "../../assets";

const techTags = [
  "AI Prediction",
  "IoT Monitoring",
  "Sensors",
  "Solar Energy",
  "Cooling Control",
  "Cloud Data Flow",
];

const bullets = [
  "AI-based defect detection using image analysis on solar panels",
  "Real-time IoT sensor data collection via MQTT / EMQX",
  "Automated cooling system triggered by heat threshold alerts",
  "Cloud dashboard with historical data visualization",
];

export default function FeaturedProject() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <SectionHeader
          number="02"
          label="Featured Project"
          heading="Solar AOI as the main system concept in the portfolio."
        />

        <article className={styles.article}>
          <div className={styles.imageWrap}>
            <img
              src={imgSolarAOI}
              alt="Solar AOI project"
              className={styles.image}
            />
          </div>
          <div className={styles.body}>
            <span className={styles.articleNumber}>02 / 01</span>
            <h3 className={styles.projectTitle}>Solar AOI</h3>
            <p className={styles.projectDesc}>
              An automated optical inspection system for solar panels that
              combines AI defect detection, IoT sensor monitoring, and
              cloud-connected data flow to maximize energy efficiency and reduce
              maintenance overhead.
            </p>
            <ul className={styles.bullets}>
              {bullets.map((b) => (
                <li key={b} className={styles.bulletItem}>
                  {b}
                </li>
              ))}
            </ul>
            <div className={styles.tags}>
              {techTags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
