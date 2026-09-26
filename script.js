const botaoTema = document.querySelector("#tema");
const backgroundHeader = document.querySelector("#background-header");

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
  document.body.classList.add("dark");
  backgroundHeader.src = "img/background-escuro.jpg";
}

botaoTema.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");

  backgroundHeader.src = dark
    ? "img/background-escuro.jpg"
    : "img/background-claro.jpg";

  localStorage.setItem("tema", dark ? "dark" : "light");
});
