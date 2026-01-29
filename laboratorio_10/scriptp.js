const key = document.getElementById("test-click");

// Ejercicio 1
function typeFunction(e) {
	var key_value = e.type;

	console.log("El tipo de funcion es:" + key_value);
}

key.addEventListener("click", typeFunction);
key.addEventListener("dblclick", typeFunction);
key.addEventListener("mousedown", typeFunction);
key.addEventListener("mouseup", typeFunction);

// Ejercicio 2

const section = document.getElementById("section");
const div = document.getElementById("div");
const button = document.getElementById("button");

function padreFuncion() {
	console.log("Click padre");
}

function buttonFuncion() {
	console.log("Click button");
}

function hijoFuncion() {
	console.log("Click hijo");
}

section.addEventListener("click", padreFuncion);
div.addEventListener("click", buttonFuncion);
button.addEventListener("click", hijoFuncion);

// Ejercicio 2

const section_3 = document.getElementById("section_3");
const div_3 = document.getElementById("div_3");
const button_3 = document.getElementById("button_3");

function padreFuncion_3(e) {
	console.log("Click padre");
	e.stopPropagation();
}

function buttonFuncion_3(e) {
	console.log("Click button");
	e.stopPropagation();
}

function hijoFuncion_3(e) {
	console.log("Click hijo");
	e.stopPropagation();
}

section_3.addEventListener("click", padreFuncion_3);
div_3.addEventListener("click", buttonFuncion_3);
button_3.addEventListener("click", hijoFuncion_3);
