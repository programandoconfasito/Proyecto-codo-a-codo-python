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