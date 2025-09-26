
// Crea una página que pida al usuario una fecha de nacimiento en formato DD/MM/AAAA.
let date = prompt("Ingresa fecha de nacimiento DD/MM/AAAA");

// 1. Valida la entrada usando expresiones regulares.
let validarDate = /^\d{2}\/\d{2}\/\d{4}$/;

// 2. Convierte la fecha en un objeto Date.

if(validarDate.test(date)){ // Verifico si la fecha ingresada coincide con el padtron

    let fecha_dividida = date.split("/"); // Aqui separo la fecha por /

    let dia = parseInt(fecha_dividida[0], 10); // El 10 porque tiene que ser exponente 10, por si se coloca 05 me mostrara 5
    let mes = parseInt(fecha_dividida[1], 10) - 1; // -1 porque el javascrip los meses empiezan desde el 0 
    let año = parseInt(fecha_dividida[2], 10);

    let fecha_Nacimiento = new Date(año, mes, dia); // El constructor del date funciona ańo, mes, dia

    // 3. Calcula la edad exacta del usuario (años cumplidos).
    // Muestra un mensaje del estilo:
    // Naciste el 15/09/2000, tienes 25 años.
    let fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fecha_Nacimiento.getFullYear();

    // 4. Extra: muestra también en qué día de la semana nació (lunes, martes, etc.). 
    alert("Naciste el " + date + ", y tienes " + edad + " años, y naciste un " + fecha_Nacimiento.toLocaleDateString("es-Es", { weekday: "long"})); // fecha_Nacimiento.toLocaleDateString("es-Es", { weekday: "long"}) esta es la estructura para mostrar el dia de la semana en letra

}else{
    alert("Formato de fecha incorrecto");
}