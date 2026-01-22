const textarea = document.getElementById("textarea");

function no_numbers(e) {
	var tecla = e.key;
	if (!isNaN(tecla)) {
		e.preventDefault();
		//alert("No se pueden ingresar numeros :)");
	}
}

textarea.addEventListener("keydown", no_numbers);
