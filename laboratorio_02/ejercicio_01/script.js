// 1. Declara variables con var, let y const dentro de una función y dentro de un bloque if.

var practica = 0;

function funcion(){

    if(true){

        var v_var = 0; // var
        let v_let = 0; // let
        const v_const = 0; // const

        console.log(v_var); // Si funciona
        console.log(v_let); // Si funciona
        console.log(v_const); // Si funciona
        
    }

    alert(v_var); // Este si funciona
    alert(v_let); // No funciona - Uncaught ReferenceError: v_let is not defined
    alert(v_const); // No funciona Uncaught ReferenceError: v_const is not defined

}

// 2. Comprueba qué variables se pueden acceder dentro y fuera de cada bloque y función.

funcion(); // Si funciona, muestra v_var
funcion(v_var); // No funciona - Uncaught ReferenceError: v_var is not defined
funcion(v_let); // No funciona - Uncaught ReferenceError: v_let is not defined 
funcion(v_const); // No funciona - Uncaught ReferenceError: v_const is not defined

// 3. Intenta volver a declarar la misma variable con cada palabra clave y observa los errores.

var v_var = 10;
let v_lext = 10;
const v_const = 10;

alert("v_var: " + v_var);
alert("v_let: " + v_let); // - No funciona - Uncaught ReferenceError: v_let is not defined
alert("v_const: " + v_const); // - No funciona - Uncaught ReferenceError: v_const is not defined

// 4. Escribe un pequeño informe en comentarios que explique:

    // ○ ¿Qué es hoisting y cómo afecta a var?
        // Hoisting es cuando JavaScript “eleva” las declaraciones de variables y funciones al inicio de su ámbito antes de ejecutar el código.
            // Ejemplo:
                // console.log(a); // undefined
                // var a = 5;

    // ○ ¿Qué diferencias de alcance existen entre var, let y const?
        // Declaración	      Alcance	     Puede redeclararse?
        //     var	    Ámbito de función	        Sí
        //     let	    Ámbito de bloque {}	        No
        //     const	Ámbito de bloque {}	        No
            // Ejemplo:
            // function ejemplo() {
            //     if(true) {
            //         var a = 1;
            //         let b = 2;
            //         const c = 3;
            //     }
            //     console.log(a);  1 var "escapa" del bloque
            //     // console.log(b); Error
            //     // console.log(c);  rror
            // }
           // ejemplo(); Llamado de la funcion

    // ○ ¿Qué significa que const no permite reasignación pero sí permite mutar objetos/arrays? (demuéstralo con código).
        // Cuando declaras una variable con const, no puedes asignarle un nuevo valor después:
            // const numero = 5;
            // numero = 10; //  Error: Assignment to constant variable
            // la variable nuemro siempre sera 5, la referencia sera congelada

        // Si la variable const contiene un objeto o un array, no puedes cambiar la referencia, pero sí puedes modificar el contenido interno.

            // const persona = { nombre: "Ana" };
            // No se puede reasignar todo el objeto
            // persona = { nombre: "Luis" }; // Error

            // Sí se pueden cambiar sus propiedades
            // persona.nombre = "Luis";
            // persona.edad = 25;

            // console.log(persona); // { nombre: "Luis", edad: 25 }    


