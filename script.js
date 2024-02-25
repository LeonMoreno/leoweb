function responsiveMenu() {
  const ele = document.getElementById("nav");
  ele.classList.toggle("responsive");
}

function select() {
  const ele = document.getElementById("nav");
  ele.classList.toggle("responsive");
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  const skills = document.getElementById("skills");
  const distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    const habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("cLang");
    habilidades[1].classList.add("cplus");
    habilidades[2].classList.add("linux");
    habilidades[3].classList.add("ruby");
    habilidades[4].classList.add("stackbe");
    habilidades[5].classList.add("javascript");
    habilidades[6].classList.add("docker");
    habilidades[7].classList.add("sql");
    habilidades[8].classList.add("netadmin");
    habilidades[9].classList.add("git");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
