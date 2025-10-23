console.log("-----------------------------------------------------------------------");
console.log("PARTE 1: Conceptos Fundamentales de Arrays");
console.log("-----------------------------------------------------------------------");

// 1. Definición y Acceso: Creamos un array llamado datosUsuario con distintos tipos de datos
let datosUsuario = ["sebastian", 25, true];
console.log("Array inicial (datosUsuario):");
console.log(datosUsuario);

// 2. Índices y Posición: Mostramos el segundo elemento del array (índice 1)
console.log("Segundo elemento del array (índice 1): " + datosUsuario[1]);

// 3. Propiedad length: Mostramos el número de elementos del array
console.log("Número de elementos en datosUsuario: " + datosUsuario.length);

console.log("-----------------------------------------------------------------------");
console.log("PARTE 2: Modificación de Arrays: Añadir y Eliminar Elementos");
console.log("-----------------------------------------------------------------------");

// 1. Añadir al final: Usamos push() para añadir dos nuevos elementos al final del array
let nuevaLongitud = datosUsuario.push("prueba", 432432);
console.log("Array después de push (añadir al final):");
console.log(datosUsuario);
console.log("Nueva longitud después de push: " + nuevaLongitud);

// 2. Eliminad del Final: Usamos pop() para eliminar y obtener el último elemento
let elementoEliminadoFinal = datosUsuario.pop();
console.log("Elemento eliminado con pop (último del array): " + elementoEliminadoFinal);
console.log("Array después de pop:");
console.log(datosUsuario);

// 3. Añadid al Principio: Usamos unshift() para añadir un elemento al inicio
let longitudUnshift = datosUsuario.unshift("Colombia");
console.log("Array después de unshift (añadir al inicio):");
console.log(datosUsuario);
console.log("Nueva longitud después de unshift: " + longitudUnshift);

// 4. Eliminar del Principio: Usamos shift() para eliminar y obtener el primer elemento
let elementoEliminadoInicio = datosUsuario.shift();
console.log("Elemento eliminado con shift (primer elemento): " + elementoEliminadoInicio);
console.log("Array después de shift:");
console.log(datosUsuario);

console.log("-----------------------------------------------------------------------");
console.log("PARTE 3: Métodos Avanzados de Arrays");
console.log("-----------------------------------------------------------------------");

// 1. Concatenación: Creamos otro array y lo concatenamos con datosUsuario
let arrayExtra = ["Tatina", 34, "Paris"];
let arrayTotal = datosUsuario.concat(arrayExtra);
console.log("Concatenación de datosUsuario y arrayExtra (arrayTotal):");
console.log(arrayTotal);

// 2. Ordenación Simple: Creamos un array de números y aplicamos sort()
let numeros = [3, 54, 234, 1234, 6, 87, 856, 32];
console.log("Array de números original:");
console.log(numeros);
console.log("Array ordenado con sort() por defecto (como strings):");
console.log(numeros.sort()); // orden lexicográfico por defecto

// 3. Ordenación Personalizada: Usamos función para ordenar numéricamente
function unaFuncion(array, orden) {
    if (orden === "asc") {
        return array.sort((a, b) => a - b); // ascendente
    } else {
        return array.sort((a, b) => b - a); // descendente
    }
}
console.log("Array ordenado ascendente usando función personalizada:");
console.log(unaFuncion(numeros, "asc"));
console.log("Array ordenado descendente usando función personalizada:");
console.log(unaFuncion(numeros, "des"));

// 4. Modificación de Contenido: Usamos splice() para reemplazar elementos en arrayTotal
console.log("ArrayTotal antes de modificar con splice:");
console.log(arrayTotal);
arrayTotal.splice(0, 1, "Nuevo Nombre"); // reemplaza el primer elemento
console.log("ArrayTotal después de modificar con splice:");
console.log(arrayTotal);

console.log("-----------------------------------------------------------------------");
console.log("PARTE 4: Funciones Predefinidas de validación y conversión");
console.log("-----------------------------------------------------------------------");

// Comprobación con isNaN()
let cadena = "Mensaje de prueba";
console.log("¿Es cadena un número? " + !isNaN(cadena)); // false, no es número

// Convertir a número entero y decimal
let n_decimal = 3.14151656436576547868877654765476543749;
console.log("parseInt(n_decimal): " + parseInt(n_decimal));
console.log("parseFloat(n_decimal): " + parseFloat(n_decimal));

// Convertir número a cadena y cadena a número
let number = 23;
console.log("Número a String: " + typeof(String(number)) + " -> " + String(number));

let stringNum = "42";
console.log("String a Number: " + typeof(Number(stringNum)) + " -> " + Number(stringNum));
