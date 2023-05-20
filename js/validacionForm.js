// // Importa la biblioteca EmailJS SDK
// import emailjs from "emailjs-com";

// // Configura EmailJS con tu información de usuario y servicio
// emailjs.init("vNzv-BySxyX5h1YCfgZUi");

// // Función para enviar el formulario y validar los campos
// function enviarFormulario(event) {
//   event.preventDefault(); // Evita que se envíe el formulario por defecto

//   // Validar el formulario antes de enviarlo
//   if (!validarFormulario()) {
//     return;
//   }

//   // Obtén los valores de los campos del formulario
//   const nombre = document.getElementById("nombre").value;
//   const apellido = document.getElementById("apellido").value;
//   const correo = document.getElementById("correo").value;
//   const celular = document.getElementById("cel").value;
//   const comentario = document.getElementById("comentario").value;

//   // Crea un objeto con los datos del formulario
//   const datosFormulario = {
//     from_name: nombre + " " + apellido,
//     from_email: correo,
//     message: comentario,
//   };

//   // Envía el correo electrónico utilizando EmailJS
//   emailjs
//     .send("service_w00ldb8", "template_jg1803u", datosFormulario)
//     .then(function (response) {
//       console.log(
//         "Correo electrónico enviado:",
//         response.status,
//         response.text
//       );
//       alert("Formulario enviado correctamente.");
//       document.getElementById("form").reset(); // Restablece el formulario después del envío
//     })
//     .catch(function (error) {
//       console.error("Error al enviar el correo electrónico:", error);
//       alert(
//         "Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente más tarde."
//       );
//     });
// }

function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const celular = document.getElementById("cel").value.trim();

  if (nombre === "" || apellido === "" || correo === "" || celular === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }

  const nombreRegExp = /^[a-zA-Z\s]+$/;
  if (!nombreRegExp.test(nombre)) {
    alert(
      "El campo 'Nombre' solo puede contener caracteres alfabéticos y espacios."
    );
    return false;
  }

  const celularRegExp = /^\d{8,12}$/;
  if (!celularRegExp.test(celular)) {
    alert("Por favor, ingrese un número de teléfono válido (8 a 12 dígitos).");
    return false;
  }

  return true;
}
