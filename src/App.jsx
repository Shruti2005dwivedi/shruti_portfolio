import { useEffect } from "react";
import Lenis from "lenis";

import BackgroundGlow from "./components/ui/BackgroundGlow";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Projects from "./components/home/Projects";
import Leadership from "./components/home/Leadership";
import Contact from "./components/home/Contact";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";
import MouseGlow from "./components/ui/MouseGlow";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <BackgroundGlow />
      <ScrollProgress />
      <MouseGlow />

      <Navbar />

      <Hero />
      <Projects />
      <About />
      <Leadership />
      <Contact />
      <BackToTop />
      <Footer />
    </>
  );
}
