const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".sidebar");

//console.log(menu)
//console.log(hamburguer)

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("aparecer"); //cada vez que hagamos click, al menú hamburguesa, le va agregar la clase aparecer
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("aparecer") &&
    e.target != menu &&
    e.target != hamburguer
  ) {
    menu.classList.toggle("aparecer");
  }

  console.log(e.target); //me dice a qué elemento le doy click
});

hamburguer.addEventListener("touch", () => {
  menu.classList.toggle("aparecer"); //cada vez que hagamos click, al menú hamburguesa, le va agregar la clase aparecer
});

window.addEventListener("touch", (e) => {
  if (
    menu.classList.contains("aparecer") &&
    e.target != menu &&
    e.target != hamburguer
  ) {
    menu.classList.toggle("aparecer");
  }

  console.log(e.target); //me dice a qué elemento le doy click
});
