// Crea una clase Alumno con las siguientes características:
// 1. Propiedades: nombre, edad, nota.

class Alumno{

    constructor(nombre, edad, nota){
        this.nombre = nombre;
        this.edad = edad; 
        this.nota = nota;
        this.mensaje;
    }

    // 2. Un método estaAprobado() que devuelva true si la nota es mayor o igual a 5.

    estarAprobado(){
        if (this.nota >= 5){
            this.mensaje = "(Aprobado)"
        }else{
            this.mensaje = "(Desaprobado)";
        }
    }

    // Un método presentacion() que devuelva una cadena como:
    // Soy Ana, tengo 20 años y mi nota es 7 (Aprobado).
    presentacion(){
        console.log("Soy " + this.nombre + ", tengo " + this.edad + " años y mi nota es " + this.nota + " " + this.mensaje);
    }
}

// 3. Crea al menos 3 instancias de Alumno y muéstralas en consola.
let alumno_01 = new Alumno("sebastian", 25, 5);
let alumno_02 = new Alumno("tatiana", 30, 10);
let alumno_03 = new Alumno("diego", 32, 9);

alumno_01.estarAprobado();
alumno_02.estarAprobado();
alumno_03.estarAprobado();

alumno_01.presentacion();
alumno_02.presentacion();
alumno_03.presentacion();

// 4. Extra: añade una clase hija AlumnoBecado con una propiedad adicional beca
// (importe en €) y sobreescribe el método presentacion() para incluir la información de la beca.

class AlumnoBecado extends Alumno{
    
    constructor(nombre, edad, nota, beca){
        super(nombre, edad, nota);
        this.beca = beca;
    }

    presentacion(){
        console.log("Soy " + this.nombre + ", tengo " + this.edad + " años y mi nota es " + this.nota + " " + this.mensaje +  " beca: " + this.beca);   
    }

}

let alumno_04 = new AlumnoBecado("sebastian", 25, 5, 100);

alumno_04.estarAprobado();
alumno_04.presentacion();