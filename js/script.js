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

// Agregar celulares al carrito
const URL = "http://lupinewolf.pythonanywhere.com/"

function agregarAlCarrito(codigo) {
  fetch(URL + 'carrito', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      codigo: codigo,
      cantidad: 1, // Puedes ajustar esto según tus necesidades
    }),
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => {
      console.error('Error al agregar el producto al carrito:', error);
      alert('Error al agregar el producto al carrito.');
    });
}






