console.log("Laboratorio 5: Matrices y Funciones");
console.log("Desarrollo de Aplicaciones Web - Unidad 02: Estructuras definidas por el programador. Objetos.");
console.log("Esta sección se centra en la gestión de arrays multidimensionales (Matrices) y el uso de las Funciones como estructuras de control.");

console.log("\nImprimid por pantalla:");
console.log("- El número del ejercicio que estáis haciendo.");
console.log("- Lo que vais a imprimir. En el caso de las funciones, qué función estáis invocando y cuál es la entrada que recibe por argumento.");
console.log("- El resultado.");

console.log("\n1. Ejercicios con Matrices (Array de Arrays) (4 puntos)");
console.log("Recordad que un array dentro de otra array se llama array multidimensional o matriz.");
console.log("Podéis acceder a los elementos de una matriz que estén dentro de otros encadenando dos pares de corchetes (matriz[x][y]).");
console.log("Para acceder al tercer elemento de la fila 4 podríamos hacer algo como esto: matriz[3][2].");

console.log("\n1.1. Creación de una Matriz (1 punto)");
console.log("- Definid una matriz llamada inventario que contenga tres arrays internos (filas).");
console.log("- Cada array interno debe representar un producto con tres datos: [nombre_string, cantidad_number, precio_number].");
console.log("- Recordad que un array es una estructura capaz de gestionar datos de diferentes tipos.");

let inventario = [["Iphone", 4, 1500], ["Reloj", 5, 1000], ["Coche", 10, 100]];

console.log("\n1.2. Acceso y Modificación Matricial (1 punto)");

console.log("- Mostrad por consola el nombre del producto ubicado en la segunda fila (índice 1) y su precio (índice 2).");
console.log("Nombre del producto ubicado en la segundo fila: " + inventario[1][0]);
console.log("Precio del producto ubicado en la segundo fila: " + inventario[1][2]);

console.log("- Utilizad la propiedad length para devolver el número total de filas en la matriz y el número de elementos en la primera fila.");
console.log("Longitud de la matriz: " + inventario.length);
console.log("Longitud de la primera fila: " + inventario[0].length);

console.log("\n1.3. Recorrido Simple (2 puntos)");

console.log("- Escribid un bucle que itere sobre la matriz y muestre por consola:");
console.log("  1) Qué elemento de la lista está accediéndose, empezando por el 1.");
console.log("  2) El nombre de todos los productos (el primer elemento de cada array interno).");

for(var i = 0; i < inventario.length; i++){
	console.log(inventario[i][0]);
};

console.log("\n2. Ejercicios con Funciones (4 puntos)");
console.log("Recordamos Función es una Agrupación de instrucciones que se invocan en un momento concreto y que puede o no devolver un valor.");

console.log("\n2.1. Función para Cálculo de Inventario (2 puntos)");
console.log("- Definid una función llamada calcularValorTotal que reciba la matriz inventario como argumento.");
console.log("- Dentro de la función, iterad sobre las filas de la matriz, calculando (cantidad * precio) para cada producto.");
console.log("- La función debe devolver la suma total del valor de todo el inventario.");

function calcularValorTotal(matriz ){

	var totalInventario = 0;
	for(var i = 0; i < matriz.length; i++){
		// Aqui calculo el precio total de los productos
		totalInventario += matriz[i][1] * matriz[i][2];
	}
	return totalInventario;
}

console.log("\nTotal del inventario:" + calcularValorTotal(inventario));

console.log("\n2.2. Uso de Funciones Anónimas");
console.log("- Definid una variable llamada ordenarPorPrecio y asignadle una función anónima que sirva como función de comparación para el método sort().");
console.log("- Utilizad esta variable ordenarPorPrecio junto con el método sort() para ordenar la matriz inventario por el precio de los productos de forma ascendente.");

var ordenarPorPrecio = function(matriz) {
    return matriz.sort(function(a, b) {
        return a[2] - b[2]; // Compara precios (índice 2)
    });
};

console.log("\n3. Prototype");
console.log("El uso de la propiedad prototype es la manera de añadir nuevos métodos y propiedades a este objeto (el Array), personalizando la funcionalidad de JavaScript.");
console.log("Artículo recomendado: https://jwwnz.medium.com/using-javascript-prototypes-to-add-a-custom-method-to-arrays-1cac04669ec6");

console.log("\n3.1. Adición de un Método al Prototype (1 punto)");
console.log("- Utilizad la propiedad prototype para añadir un nuevo método llamado obtenerUltimoElemento al objeto Array.");
console.log("- Este nuevo método debe devolver el último elemento del array, similar a cómo lo haría pop(), pero sin eliminarlo ni modificar el array original.");
console.log("- Explicad el uso de 'this' para que el método funcione, imprimiendo por consola.");

Array.prototype.obtenerUltimoElemento = function() {
  if (this.length < 1) {
    return -1
  }

  return this.pop();
}

console.log("\n3.2 Verificación del Nuevo Método (1 punto)");
console.log("- Cread un array simple de prueba.");
console.log("- Invocad el nuevo método obtenerUltimoElemento() en vuestro array de prueba y mostrad el resultado por consola.");
console.log("- Verificad que la longitud del array original (usando length) sigue siendo la misma, demostrando que el array no ha sido modificado, a diferencia de pop() o shift().");

var array = ["prueba", 34214, false, "nombre"];
console.log("\nLongitud del array antes : " + array.length)
console.log("\nEl ultimo objeto del array es: " + array.obtenerUltimoElemento());
console.log("\nLongitud del array despues: " + array.length)