
// 1 pedir al usuario con prompt su edad
var edad = prompt("Ingrese su edad");

// 2 Usar if... else para mostrar si es mayor o emnos de edad
if (edad > 18){
    alert("Bienvenido Usuario")
}else{
    alert("Tienes que ser mayor de edad")
}

// 3 Crear un for que muestre los numeros del 1 al 10 en consola
for(var i = 1; i <= 40; i++){
    console.log(i);
}

// Extra
var contra = prompt("Ingresa contrasena");

while(contra != "1234"){
    alert("Contrasena  Incorrecta");
    contra = prompt("Ingresa contrasena");
}
alert("Bienvenido");