import styles from "./CertificatesSection.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";

interface CertCard {
  number: string;
  icon: string;
  title: string;
  org: string;
  desc: string;
  year: string;
}

const certs: CertCard[] = [
  {
    number: "07 / 01",
    icon: "🥈",
    title: "Innovation Pitch 1st Runner-up",
    org: "KMITL Engineering Expo",
    desc: "Awarded 1st Runner-up in the innovation pitch competition for a smart IoT-based solution for energy monitoring in industrial environments.",
    year: "2024",
  },
  {
    number: "07 / 02",
    icon: "🛡️",
    title: "True CyberSafe Hackathon",
    org: "True Corporation",
    desc: "Participated in national cybersecurity hackathon focusing on network security, ethical hacking challenges, and secure system design.",
    year: "2023",
  },
  {
    number: "07 / 03",
    icon: "📜",
    title: "Certificate Placeholder",
    org: "Issuing Organization",
    desc: "Additional certification in progress. Exploring cloud certifications and AI-related credentials to complement the engineering degree.",
    year: "TBA",
  },
];

export default function CertificatesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          number="07"
          label="Certificates & Awards"
          heading="Recognition from competitions, hackathons, and professional certifications."
        />

        <div className={styles.grid}>
          {certs.map((cert) => (
            <article className={styles.card} key={cert.number}>
              <span className={styles.cardNumber}>{cert.number}</span>
              <span className={styles.badge}>{cert.icon}</span>
              <h3 className={styles.cardTitle}>{cert.title}</h3>
              <p className={styles.cardOrg}>{cert.org}</p>
              <p className={styles.cardDesc}>{cert.desc}</p>
              <span className={styles.cardYear}>{cert.year}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
