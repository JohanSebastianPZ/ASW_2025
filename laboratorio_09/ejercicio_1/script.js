const button = document.getElementById("btn-multi");

function funcion_1() {
	console.log("Ejecucion de la funcion 1");
}
function funcion_2() {
	console.log("Ejecucion de la funcion 2");
}

button.addEventListener("click", funcion_1);
button.addEventListener("click", funcion_2);
