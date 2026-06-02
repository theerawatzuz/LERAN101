import { imgLogo1, imgLogo2, imgLogo3, imgLogo4, imgLogo5 } from "../../assets";
import styles from "./LogoBar.module.css";

const LOGOS = [
  { src: imgLogo1, alt: "Brand 1", w: 116, h: 38 },
  { src: imgLogo2, alt: "Brand 2", w: 86, h: 31 },
  { src: imgLogo3, alt: "Brand 3", w: 113, h: 17 },
  { src: imgLogo4, alt: "Brand 4", w: 38, h: 47 },
  { src: imgLogo5, alt: "Brand 5", w: 65, h: 44 },
];

export default function LogoBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        {LOGOS.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className={styles.logo}
            style={{ width: logo.w, height: logo.h }}
          />
        ))}
      </div>
    </div>
  );
}
