// Apartado 1 – Definición de la clase y propiedades
// Propiedades:
// nombre (string)
// poblacion (número)
// area (número, en km²)
// ciudades (array con al menos tres nombres de ciudades)
// Crea un constructor que reciba esos valores.

class pais {
	constructor(nombre, poblacion, area, ciudades) {
		this.nombre = nombre;
		this.poblacion = poblacion;
		this.area = area;
		this.ciudades = ciudades;
	}

	// Apartado 2 – Métodos con operadores básicos y acumulativos
	// Implementa un método incrementarPoblacion(cantidad) que sume la cantidad recibida a la propiedad poblacion usando un operador acumulativo (+=).
	// Implementa otro método densidad() que calcule la densidad del país (población / área). Utiliza solo operadores de asignación.
	/**
	 *
	 */
	incrementarPoblacion(cantidad) {
		this.poblacion += cantidad;
	}
	/**
	 *
	 */
	densidad() {
		return this.poblacion / this.area;
	}

	// Apartado 3 – Operadores comparativos y ternario
	// Crea un método compararArea(otroPais) que compare el área del país actual con otro país y devuelva un mensaje usando un operador ternario:
	// Si el país actual es más grande: "X es más grande que Y".
	// Si no: "Y es más grande que X".

	/**
	 *
	 */
	compararArea(otroPais) {
		return this.area > otroPais.area ? this.nombre + " es más grande que " + otroPais.nombre : otroPais.nombre + " es más grande que " + this.nombre;
	}

	// Apartado 4 – Trabajo con listas y bucles anidados
	// Crea un método mostrarCiudades() que recorra el array ciudades y muestre cada una en consola.
	// Crea un método mostrarCiudadesPorLetra() que use un bucle anidado:
	// Recorre cada ciudad.
	// Dentro, recorre las letras de cada ciudad y las muestre una a una.

	/**
	 *
	 */
	mostrarCiudades() {
		this.ciudades.forEach((element) => {
			console.log(element);
		});
	}

	/**
	 *
	 */
	mostrarCiudadesPorLetra() {
		for (let ciudad of this.ciudades) {
			console.log(`--- Letras de ${ciudad} ---`);
			for (let letra of ciudad) {
				console.log(letra);
			}
		}
	}
		
}


// Apartado 5 – Prueba del código
// Crea dos objetos de la clase Pais.
// Llama a todos los métodos creados y muestra los resultados en la consola.

const argentina = new pais("Argentina", 1000, 200, ["Buenos Aires", "Córdoba", "Rosario"]);
const colombia = new pais("Colombia", 500, 102, ["Bogota", "Medellin", "Pacho"]);

console.log("============= ARGENTINA =============");

console.log("Poblacion inicial: ", argentina.poblacion);
argentina.incrementarPoblacion(50);
console.log("Poblacion despues del incremento: ", argentina.poblacion);
const densidadArgentina = argentina.densidad();
console.log("La densidad de argentina es: ", densidadArgentina, "km");
console.log(argentina.compararArea(colombia));
argentina.mostrarCiudades();
argentina.mostrarCiudadesPorLetra();

console.log("============= COLOMBIA =============");

console.log("Poblacion inicial: ", colombia.poblacion);
colombia.incrementarPoblacion(50);
console.log("Poblacion despues del incremento: ", colombia.poblacion);
const densidadColombia = colombia.densidad();
console.log("La densidad de colombia es: ", densidadColombia, "km");
console.log(colombia.compararArea(argentina));
colombia.mostrarCiudades();
colombia.mostrarCiudadesPorLetra();