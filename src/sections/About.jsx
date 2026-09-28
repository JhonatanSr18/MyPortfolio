import { motion } from "motion/react";

export default function About() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre_numero">01</div>

      <div className="sobre_container">
        <motion.div
          className="sobre_titulo"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span>QUEM SOU</span>

          <h2>
            SOBRE
            <br />
            MIM<span className="ponto">.</span>
          </h2>
        </motion.div>

        <motion.div
          className="sobre_conteudo"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="sobre_destaque">
            Desenvolvo páginas e aplicações buscando unir{" "}
            <strong>design moderno</strong>, <strong>identidade</strong> e{" "}
            <strong>funcionalidade.</strong>
          </p>

          <p className="sobre_texto">
            Sou desenvolvedor Full Stack e estudante de Análise e
            Desenvolvimento de Sistemas. Gosto de criar coisas que fazem sentido
            ou que dão sentido a algo, sou curioso desde berço e é aqui que
            passo todo meu tempo livre.
          </p>

          <p className="sobre_texto">
            Estou constantemente estudando novas tecnologias e buscando evoluir
            através de projetos que me desafiem a encontrar soluções simples,
            funcionais e bem construídas.
          </p>

          <div className="sobre_info">
            <motion.div className="info_item" whileHover={{ y: -5 }}>
              <span>FOCO</span>
              <p>Full Stack Development</p>
            </motion.div>

            <motion.div className="info_item" whileHover={{ y: -5 }}>
              <span>CIDADE</span>
              <p>Belém, PA — Brasil</p>
            </motion.div>

            <motion.div className="info_item" whileHover={{ y: -5 }}>
              <span>FORMAÇÃO</span>
              <p>Análise e Desenvolvimento de Sistemas</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="sobre_linha">
        <span>SCROLL TO EXPLORE</span>
        <div></div>
      </div>
    </section>
  );
}
