const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  telefono: /^\d{4}\-\d{4}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  nombre_empresa: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
  dui: /^\d{8}\-\d{1}$/,
  nit: /^\d{14}$/,
  puesto: /^[a-zA-ZÀ-ÿ\s]{8,40}$/,
  salario: /^\d{1,5}\.\d{1,5}$/
}
const campos = {
  nombre: false,
  apellido: false,
  telefono: false,
  correo: false,
  empresa: false,
  dui: false,
  nit: false,
  puesto: false,
  salario: false
}
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, 'nombre')
    break;
    case "apellido":
      validarCampo(expresiones.apellido, e.target, 'apellido')
    break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, 'telefono')
    break;
    case "correo":
      validarCampo(expresiones.correo, e.target, 'correo')
    break;
    case "empresa":
      validarCampo(expresiones.nombre_empresa, e.target, 'empresa')
    break;
    case "dui":
      validarCampo(expresiones.dui, e.target, 'dui')
    break;
    case "nit":
      validarCampo(expresiones.nit, e.target, 'nit')
    break;
    case "puesto":
      validarCampo(expresiones.puesto, e.target, 'puesto')
    break;
    case "salario":
      validarCampo(expresiones.salario, e.target, 'salario')
    break;
  }
  }
const validarCampo = (expresion, input, campo)=> {
  if (expresion.test(input.value)) {
      document.getElementById(`grupo__${campo}`).classList.remove('grupo__formulario-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.add('grupo__formulario-correcto');
      document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
      document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
      campos[campo] = true;

  }else {
      document.getElementById(`grupo__${campo}`).classList.add('grupo__formulario-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.remove('grupo__formulario-correcto');
      document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
      document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
      campos[campo] = false;
  }
}
inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  //Cuando todos los valores son correctos
  if (campos.nombre && campos.apellido && campos.telefono &&
      campos.correo && campos.empresa && campos.dui &&
      campos.nit && campos.puesto && campos.salario) {
        formulario.reset();
        document.querySelectorAll('.grupo__formulario-correcto').forEach((icono) => {
          icono.classList.remove('grupo__formulario-correcto');
        });
  }else {
    document.getElementById('mensaje').classList.add('mensaje-activo');
  }
})
