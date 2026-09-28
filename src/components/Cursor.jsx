import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);
  const pontoRef = useRef(null);

  useEffect(() => {
    const mouseFino = window.matchMedia("(pointer: fine)");

    if (!mouseFino.matches) {
      return;
    }

    const moverCursor = (event) => {
      gsap.to(cursorRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.45,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.set(pontoRef.current, {
        x: event.clientX,
        y: event.clientY,
      });
    };

    const aumentar = () => {
      gsap.to(cursorRef.current, {
        scale: 1.7,
        duration: 0.25,
      });
    };

    const diminuir = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.25,
      });
    };

    window.addEventListener("mousemove", moverCursor);

    const interativos = document.querySelectorAll(
      "a, button, .skill_item, .projeto_card",
    );

    interativos.forEach((elemento) => {
      elemento.addEventListener("mouseenter", aumentar);

      elemento.addEventListener("mouseleave", diminuir);
    });

    return () => {
      window.removeEventListener("mousemove", moverCursor);

      interativos.forEach((elemento) => {
        elemento.removeEventListener("mouseenter", aumentar);

        elemento.removeEventListener("mouseleave", diminuir);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />

      <div ref={pontoRef} className="cursor_ponto" />
    </>
  );
}
