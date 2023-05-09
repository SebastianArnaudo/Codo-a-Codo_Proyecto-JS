const formulario = document.getElementById('formulario');// accedemmos al formulario
const inputs = document.querySelectorAll('#formulario input'); //arreglo de imputs dentro del formulario


const valcampo = { //formato de los campos
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,20}$/,  
	correo: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	dni: /^\d{8}$/,  
	telefono: /^\d{7,14}$/,  
    comentario: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,  
}

const campos = { // variables del campos del frm 
	nombre: false,
	apellido: false,
	dni: false,
	telefono: false, 
	correo: false,
	comentario: false
}

const validarFormulario = (e) => { // validamos que los campso contengan el formato correcto 
	switch (e.target.name) {
		case "nombre":
			validarCampo(valcampo.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(valcampo.nombre, e.target, 'apellido');
		break;
		case "dni":
			validarCampo(valcampo.dni, e.target, 'dni');
		break;
		case "telefono":
			validarCampo(valcampo.telefono, e.target, 'telefono');
		break;
		case "correo":
			validarCampo(valcampo.correo, e.target, 'correo');
		break;
        case "comentario":
			validarCampo(valcampo.correo, e.target, 'comentario');
		break;

	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`${campo}`).classList.remove('frmgrupo-incorrecto');
		document.getElementById(`${campo}`).classList.add('frmgrupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .frminput-error`).classList.remove('frminput-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`${campo}`).classList.add('frmgrupo-incorrecto');
		document.getElementById(`${campo}`).classList.remove('frmgrupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .frminput-error`).classList.add('frminput-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);// con este evento llamo  al evento cada vez que escribo una letra dentro de la cajita 
	input.addEventListener('blur', validarFormulario);// con este evento llamo  al evento cuando salgo de la cajita 
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault(); // agrego esta linea para evitar mandar los datos antes de validar

	if(campos.nombre && campos.apellido  && campos.dni && campos.telefono && campos.correo && campos.comentario ){ 
		formulario.reset();// para limpiar los campos

		document.getElementById('frm-msg-exito').classList.add('frm-msg-exito-activo');
		setTimeout(() => {
			document.getElementById('frm-msg-exito').classList.remove('frm-msg-exito-activo');
		}, 5000);

		document.querySelectorAll('.frmgrupo-correcto').forEach((icono) => {
			icono.classList.remove('frmgrupo-correcto');
		});
	} else {
        document.getElementById('frm-msg-exito').classList.add('frm-msg-activo');
	}
});