const key = document.getElementById("main-body");

function key_register(e) {
	var key_value = e.key;
	var key_type = e.type;

	console.log("El valor para key_value es: " + key_value + " y el valor para key_type es: " + key_type);
}

key.addEventListener("keydown", key_register);
