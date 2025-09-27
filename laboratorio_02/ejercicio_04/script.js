// Crea una página que utilice diferentes métodos y propiedades del objeto window.
// Requisitos:
// 1. Mostrar en consola el tamaño actual de la ventana (innerWidth, innerHeight).

console.log("ancho " + window.innerWidth + " px");
console.log("alto " + window.innerHeight + " px");

// 2. Permitir abrir una nueva ventana con una URL al pulsar un botón (window.open).

document.getElementById('boton').addEventListener('click', () => {

    // let enlace = 'https://youtube.com'; Esto no lo puedo hacer ya que es una pagina externa, no puedo modificar el DOM de otra pagina

    let nueva_ventana = window.open("", '_blank');

    if(nueva_ventana){
        
        // Aqui tengo que colocar el codigo htmml de la pagina que quiero abrir
        // Futuro cambio, mirar como puedo solo agregar el link del archivo en vez, de el codigo html
        nueva_ventana.document.write(` 
            <html>
                <head><title>Titulo</title></head>
                <body>
                    <h2>Titulo de prueba</h2>
                    <p id="mensaje"></p>
                    <button id="cerrar">Cerra Ventana</button>

                    <script>

                        // 3. Mostrar un alert de bienvenida al cargar la página.
                        alert("Bienvenido :)");

                        // 4. Preguntar al usuario su nombre con prompt() y mostrarlo en el documento (document.write o innerHTML).
                        let nombre = prompt("Ingrese su nombre");
                        document.getElementById("mensaje").innerText = "Hola, " + nombre;                        

                        document.getElementById('cerrar').addEventListener('click', () => {

                            // 5. Usar confirm() para preguntar si desea cerrar la ventana recién abierta y, si responde “sí”, cerrarla.
                            let cerrar = confirm("Dese cerrar la ventana?");

                            if (cerrar){
                             window.close(); // window.close solo puede cerrar ventanas que fueron abiertas mediante window.open(), por eso este no funciona
                            }

                        });

                        
                    <\/script>
                </body>
            </html>

        `);
        nueva_ventana.document.close(); // Tengo que cerrarlo para que cargue
    }else{
        alert("Ocurrio un error :*(")
    }
});

// document.getElementById('cerrar').addEventListener('click', () => {

//     // 5. Usar confirm() para preguntar si desea cerrar la ventana recién abierta y, si responde “sí”, cerrarla.
//     let cerrar = confirm("Dese cerrar la ventana?");

//     if (cerrar){
//         window.close(); // window.close solo puede cerrar ventanas que fueron abiertas mediante window.open(), por eso este no funciona
//     }

// });
