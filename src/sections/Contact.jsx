import { motion } from "motion/react";
import { useLenis } from "lenis/react";

export default function Contact() {
  const lenis = useLenis();

  const voltarTopo = () => {
    lenis?.scrollTo(0, {
      duration: 1.4,
    });
  };

  return (
    <section className="contato" id="contato">
      <div className="contato_numero">05</div>

      <div className="contato_container">
        <div className="contato_label">
          <span>VAMOS CONVERSAR?</span>

          <div />
        </div>

        <motion.div
          className="contato_principal"
          initial={{
            opacity: 0,
            y: 80,
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
          <p>PRECISA DE UM DESENVOLVEDOR?</p>

          <h2>
            VAMOS CRIAR
            <br />
            ALGO <span>JUNTOS.</span>
          </h2>
        </motion.div>

        <motion.div
          className="contato_acoes"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <a href="mailto:SEUEMAIL@gmail.com" className="contato_email">
            <span className="contato_email_texto">jhonatansr990@gmail.com</span>

            <span className="contato_email_seta">↗</span>
          </a>

          <div className="contato_sociais">
            <span>ENCONTRE-ME</span>

            <div className="contato_links">
              <a
                href="https://github.com/jhonatansr18"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jhonatansr18"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN
                <span>↗</span>
              </a>
            </div>
          </div>
        </motion.div>

        <footer className="footer">
          <div className="footer_nome">
            <span>JHONATAN ROCHA</span>

            <p>FULL STACK DEVELOPER</p>
          </div>

          <div className="footer_centro">
            <span>DESIGNED & DEVELOPED BY ME</span>
          </div>

          <button className="voltar_topo" onClick={voltarTopo}>
            VOLTAR AO TOPO
            <span>↑</span>
          </button>
        </footer>
      </div>
    </section>
  );
}
