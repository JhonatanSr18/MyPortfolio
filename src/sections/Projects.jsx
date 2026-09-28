import { useLayoutEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projetos = [
  {
    numero: "01",
    categoria: "FULL STACK / WEB APP",
    nome: "MyStock",
    descricao:
      "Aplicação para organização e gerenciamento de estoque de casa, o projeto ainda está em desenvolvimento, mas em breve estará nas lojas de aplicativos moveis.",
    imagem: "/img/mystock.png",
    tecnologias: ["HTML", "CSS", "JavaScript", "Cloudflare"],
    projeto: "#",
    github: "#",
  },
  {
    numero: "02",
    categoria: "FULL STACK / CLIENTE REAL",
    nome: "Fábrica de Entretenimento",
    descricao:
      "Plataforma para divulgação e gerenciamento de eventos, com área administrativa, autenticação e CRUD completo.",
    imagem: "/img/showbusiness.png",
    tecnologias: ["Python", "Flask", "Jinja", "PostgreSQL"],
    projeto: "#",
    github: "#",
  },
  {
    numero: "03",
    categoria: "FRONT-END / WEBSITE",
    nome: "Atlas Travel",
    descricao:
      "Website de turismo amazônico trazendo toda essa nossa rica cultura paraense e uns toques de requinte, criado para aprendizado em que demonstra alguns testes de responsividade, layout e menus, em breve mais atualizações.",
    imagem: "/img/atlastravel.png",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    projeto: "#",
    github: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressoRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const distanciaHorizontal = () => {
        return trackRef.current.scrollWidth - window.innerWidth;
      };

      const tween = gsap.to(trackRef.current, {
        x: () => -distanciaHorizontal(),

        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top top",

          end: () => `+=${distanciaHorizontal()}`,

          scrub: 1,

          pin: true,

          invalidateOnRefresh: true,

          anticipatePin: 1,

          onUpdate: (self) => {
            gsap.set(progressoRef.current, {
              scaleX: self.progress,
            });
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="projetos" id="projetos">
      <div className="projetos_numero">02</div>

      <div className="projetos_header">
        <motion.div
          className="projetos_titulo"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span>TRABALHOS SELECIONADOS</span>

          <h2>
            MEUS PROJETOS
            <span className="ponto">.</span>
          </h2>
        </motion.div>

        <div className="projetos_progresso">
          <span>SCROLL</span>

          <div className="progresso_barra">
            <div ref={progressoRef} className="progresso_atual" />
          </div>
        </div>
      </div>

      <div className="projetos_viewport">
        <div ref={trackRef} className="projetos_horizontal">
          {projetos.map((projeto) => (
            <article className="projeto_card" key={projeto.nome}>
              <div className="projeto_numero">{projeto.numero}</div>

              <div className="projeto_imagem">
                <img src={projeto.imagem} alt={projeto.nome} />
              </div>

              <div className="projeto_conteudo">
                <span>{projeto.categoria}</span>

                <h3>{projeto.nome}</h3>

                <p>{projeto.descricao}</p>

                <div className="projeto_tecnologias">
                  {projeto.tecnologias.map((tecnologia) => (
                    <span key={tecnologia}>{tecnologia}</span>
                  ))}
                </div>

                <div className="projeto_links">
                  <a href={projeto.projeto} target="_blank" rel="noreferrer">
                    VER PROJETO <b>↗</b>
                  </a>

                  <a href={projeto.github} target="_blank" rel="noreferrer">
                    GITHUB <b>↗</b>
                  </a>
                </div>
              </div>
            </article>
          ))}

          <div className="projetos_final">
            <span>03 / 03</span>

            <h3>
              MAIS
              <br />
              PROJETOS
              <span>.</span>
            </h3>

            <a
              href="https://github.com/jhonatansr18"
              target="_blank"
              rel="noreferrer"
            >
              VER GITHUB ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
