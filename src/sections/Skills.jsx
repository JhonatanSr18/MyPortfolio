import { motion } from "motion/react";

const grupos = [
  {
    numero: "01",
    titulo: "FRONT-END",
    skills: [
      ["HTML", "ESTRUTURA"],
      ["CSS", "INTERFACE"],
      ["JavaScript", "INTERATIVIDADE"],
      ["Jinja", "TEMPLATES"],
    ],
  },
  {
    numero: "02",
    titulo: "BACK-END",
    skills: [
      ["Python", "LINGUAGEM"],
      ["Flask", "FRAMEWORK"],
      ["REST API", "INTEGRAÇÃO"],
    ],
  },
  {
    numero: "03",
    titulo: "DATABASE",
    skills: [
      ["PostgreSQL", "DATABASE"],
      ["SQL", "QUERIES"],
    ],
  },
  {
    numero: "04",
    titulo: "TOOLS",
    skills: [
      ["Git", "VERSIONAMENTO"],
      ["GitHub", "REPOSITÓRIOS"],
      ["VS Code", "DESENVOLVIMENTO"],
      ["Cloudflare", "DEPLOY"],
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills_numero">03</div>

      <div className="skills_container">
        <motion.div
          className="skills_esquerda"
          initial={{
            opacity: 0,
            x: -70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="skills_label">TECNOLOGIAS & FERRAMENTAS</span>

          <h2>
            MINHAS
            <br />
            SKILLS
            <span className="ponto">.</span>
          </h2>

          <p>
            Tecnologias que utilizo para transformar ideias em interfaces,
            aplicações e soluções completas.
          </p>
        </motion.div>

        <div className="skills_direita">
          {grupos.map((grupo, index) => (
            <motion.div
              className="skill_grupo"
              key={grupo.titulo}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
            >
              <div className="skill_grupo_titulo">
                <span>{grupo.numero}</span>

                <h3>{grupo.titulo}</h3>
              </div>

              <div className="skill_lista">
                {grupo.skills.map(([nome, tipo]) => (
                  <motion.div
                    className="skill_item"
                    key={nome}
                    whileHover={{
                      y: -5,
                      scale: 1.025,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 20,
                    }}
                  >
                    <span>{nome}</span>

                    <small>{tipo}</small>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="skills_footer">
        <span>ALWAYS LEARNING</span>
        <div />
      </div>
    </section>
  );
}
