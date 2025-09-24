// 1 Podel el nombre y la edad al usuario

var nombre = prompt("Ingrese nombre");
var edad = prompt("Ingrese edad");

// 2 Muestre un saludo personalizado "Hola Nombre, tienes edad años"

alert("Hola " + nombre + ", tienes " + edad + " años");

// 3 Si la edad es mayor de 18, mostrar "Puedes Entrar", si no "Acceso denegado"

if (edad >= 18){
    alert("Acceso permitido");
}else{
    alert("Acceso denegado");
}