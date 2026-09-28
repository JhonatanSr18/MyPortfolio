import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Cursor from "./components/Cursor.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";

import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef(null);

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("tema") === "dark";
  });

  // MODO CLARO / ESCURO
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("tema", dark ? "dark" : "light");
  }, [dark]);

  // LENIS + GSAP
  useEffect(() => {
    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    const lenis = lenisRef.current?.lenis;

    lenis?.on("scroll", ScrollTrigger.update);

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis?.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        autoRaf: false,
        lerp: 0.08,
        smoothWheel: true,
      }}
    >
      <Cursor />
      <ScrollProgress />

      <Hero dark={dark} setDark={setDark} />

      <main>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </ReactLenis>
  );
}
