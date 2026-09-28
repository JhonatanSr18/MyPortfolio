import { motion } from "motion/react";

const experiencias = [
  {
    data: "ATUAL",
    categoria: "DESENVOLVIMENTO",
    titulo: "Full Stack Developer",
    descricao:
      "Desenvolvimento de aplicações web completas, trabalhando desde a construção das interfaces até a integração com back-end, banco de dados e deploy.",
    tags: ["Python", "Flask", "PostgreSQL", "JavaScript"],
  },
  {
    data: "2026",
    categoria: "PROJETO REAL",
    titulo: "Fábrica de Entretenimento",
    descricao:
      "Desenvolvimento de uma plataforma web para uma empresa de eventos, incluindo gerenciamento de eventos, autenticação administrativa e banco de dados.",
    tags: ["Flask", "Jinja", "PostgreSQL", "CRUD"],
  },
  {
    data: "ATUAL",
    categoria: "FORMAÇÃO",
    titulo: "Análise e Desenvolvimento de Sistemas",
    descricao:
      "Formação voltada ao desenvolvimento de software, banco de dados, programação e construção de aplicações.",
    tags: ["ADS", "Software", "Database", "Web"],
  },
];

export default function Experience() {
  return (
    <section className="experiencia" id="experiencia">
      <div className="experiencia_numero">04</div>

      <div className="experiencia_container">
        <motion.div
          className="experiencia_topo"
          initial={{
            opacity: 0,
            y: 70,
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
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span>MINHA TRAJETÓRIA</span>

          <h2>
            EXPERIÊNCIA
            <span className="ponto">.</span>
          </h2>

          <p>
            Minha evolução através de formação, desenvolvimento e experiências
            práticas com projetos reais.
          </p>
        </motion.div>

        <div className="experiencia_lista">
          {experiencias.map((item, index) => (
            <motion.article
              className="experiencia_item"
              key={item.titulo}
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
            >
              <div className="experiencia_data">
                <span>{item.data}</span>
              </div>

              <div className="experiencia_cargo">
                <span>{item.categoria}</span>

                <h3>{item.titulo}</h3>
              </div>

              <div className="experiencia_descricao">
                <p>{item.descricao}</p>

                <div className="experiencia_tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="experiencia_seta">↗</div>
            </motion.article>
          ))}
        </div>

        <div className="experiencia_footer">
          <span>BUILD • LEARN • EVOLVE</span>

          <div />
        </div>
      </div>
    </section>
  );
}
