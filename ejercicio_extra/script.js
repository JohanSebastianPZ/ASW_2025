// El sistema debe cumplir con los siguientes requisitos:
// 1. Tener una clase abstracta Vehiculo que:
// ○ No pueda ser instanciada directamente. Fijaos en si esto se puede hacer de forma nativa en Javascript. 
// Analizad el uso de las clases abstractas en este lenguaje en comparación con Java.
// ○ Tenga las propiedades:
// ■ marca
// ■ modelo
// ■ velocidadMaxima

// En JavaScript no existe el concepto de clase abstracta de manera nativa como en Java o C#
// En este caso impedire que la clase se instancie directamente
class Vehiculo{

    constructor(marca, modelo, velocidadMaxima){
        
        // Aqui hago que la clase no se pueda instanciar
        if (new.target === Vehiculo){
            throw new Error("No se puede instanciar una clase abstracta");
        }

        this.marca = marca; 
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;

    }

    // ○ Declare un método abstracto acelerar() que debe implementarse en las subclases.
    // ○ Tenga un método común detener() que muestre:
    // "El [tipo de vehículo] se ha detenido."
    acelerar(){
        throw new Error("El método 'acelerar()' debe ser implementado en la subclase.");
    }

    detener(){
        console.log("El " + this.modelo + " se ha detenido");
    }

}

// 2. Tenga dos subclases que hereden de Vehiculo:
// ○ Auto
// ■ Tiene una propiedad adicional: puertas.
// ■ Implementa el método acelerar() mostrando:
// "El auto acelera hasta X km/h."

class Auto extends Vehiculo{
    
    constructor(marca, modelo, velocidadMaxima, puertas){
        super(marca, modelo, velocidadMaxima);
        this.puertas = puertas;
    }

    acelerar(){
        console.log("El auto acelera hasta " + this.velocidadMaxima + " km/h");
    }

}

// ○ Bicicleta
// ■ Tiene una propiedad adicional: tipo (por ejemplo: montaña, urbana).
// ■ Implementa el método acelerar() mostrando:
// "La bicicleta alcanza una velocidad de X km/h pedaleando."

class Bicicleta extends Vehiculo{

    constructor(marca, modelo, velocidadMaxima, tipo){
        super(marca, modelo, velocidadMaxima)
        this.tipo = tipo;
    }

    acelerar(){
        console.log("La bicicleta alcalza una velocidad de " + this.velocidadMaxima + " km/h pedaleando");
    }
}

// 3. Crear al menos una instancia de cada subclase y:
// ○ Llamar a sus métodos acelerar() y detener().
// ○ Intentar instanciar Vehiculo y comprobar que lanza un error.

let auto = new Auto("marca_auto", "modelo_auto", 180);
auto.acelerar(); 
auto.detener();  

let bicicleta = new Bicicleta("marca_bicicleta", "modelo_bicicleta", 299);
bicicleta.acelerar(); 
bicicleta.detener();  

// let v = new Vehiculo("Genérica", "X", 100); // ❌ Error: No se puede instanciar

