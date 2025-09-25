
// ● El ordenador genera un número aleatorio entre 1 y 100.
var n_random = Math.floor(Math.random() * 100) + 1; // random number beetwen 1 an 100

alert(n_random);

// ● El usuario tiene hasta 7 intentos para adivinarlo.
var counter = 1; 
var number = parseInt(prompt("Ingrese un numero del 1 al 100")); // Aqui se parseo porque prompt espera texto no un numero

// ● Después de cada intento, el programa indica si el número es mayor o menor que la suposición.
while(n_random != number && counter < 7){

    if(n_random > number){
        number = parseInt(prompt("Numero mayor, ingresa otro numero del 1 al 100"));
    }else{
        number = parseInt(prompt("Numero menor, ingrese otro numero del 1 al 100"));
    }    
    counter++;
    
}

// ● Si acierta, muestra el número de intentos que necesitó.
// ● Si no lo consigue en 7 intentos, muestra el mensaje “Has perdido. El número era X”.
if (n_random == number){
    alert("Numero de intentos: " + counter);
}else{
    alert("Has perdido. El numero era: " + n_random);
}

