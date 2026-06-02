import { useState, type FormEvent } from "react";
import {
  imgGithub,
  imgLinkedin,
  imgDribbble,
  imgInsta,
  imgBehance,
} from "../../assets";
import styles from "./ContactSection.module.css";

const SOCIALS = [
  { src: imgGithub, alt: "GitHub", href: "https://github.com/nawkkwan" },
  { src: imgLinkedin, alt: "LinkedIn", href: "#" },
  { src: imgDribbble, alt: "Dribbble", href: "#" },
  { src: imgInsta, alt: "Instagram", href: "#" },
  { src: imgBehance, alt: "Behance", href: "#" },
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    window.location.href = `mailto:kwantong2549@gmail.com?subject=Hello from ${name}&body=From: ${email}`;
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Let's work together</h2>

        <div className={styles.body}>
          {/* Left */}
          <div className={styles.info}>
            <p className={styles.desc}>
              Open to internships, IoT-focused full-stack work, and
              collaborative projects. Feel free to reach out —
              kwantong2549@gmail.com
            </p>
            <div className={styles.socials}>
              {SOCIALS.map(({ src, alt, href }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className={styles.socialLink}
                >
                  <img src={src} alt={alt} className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.fields}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                aria-label="Name"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                aria-label="Email"
              />
            </div>
            <button type="submit" className={styles.btn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
