import "./styles/global.css";
import Nav from "./components/Nav/Nav";
import HeroSection from "./components/HeroSection/HeroSection";
import LogoBar from "./components/LogoBar/LogoBar";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import GallerySection from "./components/GallerySection/GallerySection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <LogoBar />
        <SkillsSection />
        <GallerySection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
