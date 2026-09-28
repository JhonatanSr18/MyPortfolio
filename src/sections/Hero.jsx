import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ dark, setDark }) {
  const heroRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);
  const nomeRef = useRef(null);

  // PARALLAX DURANTE O SCROLL
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(backgroundRef.current, {
        yPercent: 18,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(contentRef.current, {
        y: 120,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "75% top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // MOVIMENTO LEVE DO NOME COM O MOUSE
  useEffect(() => {
    const moverNome = (event) => {
      if (window.scrollY > window.innerHeight) return;

      const x = (event.clientX / window.innerWidth - 0.5) * 16;

      const y = (event.clientY / window.innerHeight - 0.5) * 10;

      gsap.to(nomeRef.current, {
        x,
        y,
        duration: 0.7,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moverNome);

    return () => {
      window.removeEventListener("mousemove", moverNome);
    };
  }, []);

  return (
    <header ref={heroRef} id="inicio">
      <div className="background_img">
        <img
          ref={backgroundRef}
          id="background-header"
          src={
            dark ? "/img/background-escuro.jpg" : "/img/background-claro.jpg"
          }
          alt=""
        />
      </div>

      <motion.button
        className={`botao_flip_cor ${dark ? "tema_dark" : "tema_light"}`}
        id="tema"
        onClick={() => setDark(!dark)}
        whileTap={{ scale: 0.92 }}
        aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      >
        <span className="tema_icone tema_sol">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="3.5" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
          </svg>
        </span>

        <span className="tema_icone tema_lua">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" />
          </svg>
        </span>

        <motion.span
          className="btn_flip"
          animate={{ x: dark ? 38 : 0 }}
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 28,
          }}
        />
      </motion.button>

      <div ref={contentRef} className="header_content">
        <motion.h1
          ref={nomeRef}
          className="header_name"
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          JHONATAN ROCHA
        </motion.h1>

        <motion.h2
          className="header_descricao"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="sobre_mim"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          Entre ideias e código, construo experiências digitais que funcionam.
        </motion.p>
      </div>
    </header>
  );
}
