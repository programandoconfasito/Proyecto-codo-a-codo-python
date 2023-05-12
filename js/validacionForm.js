function validarFormulario() {
  let nombre = document.querySelector("#nombre").value.trim();
  let apellido = document.querySelector("#apellido").value.trim();
  let email = document.querySelector("#email").value.trim();
  let celular = document.querySelector("#cel").value.trim();

  if (nombre === "" || apellido === "" || email === "" || celular === "") {
    alert("Por favor complete todos los campos del formulario");
    return false;
  }

  for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode === 32
      )
    ) {
      alert(
        "El campo 'nombre' solo puede contener caracteres alfabéticos y espacios."
      );
      return false;
    }
  }

  if (!(celular.length > 7 && celular.length < 13)) {
    alert("El número de teléfono debe ser válido");
    return false;
  }
  for (var j = 0; j < celular.length; j++) {
    let digito = celular.charAt(j);
    if (digito < "0" || digito > "9") {
      alert("El campo 'dni' solo puede contener dígitos numéricos.");
      return false;
    }
  }

  alert("Formulario enviado correctamente.");
  return true;
}
