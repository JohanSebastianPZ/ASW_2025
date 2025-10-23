// /Práctica Unidad 1 - Gestión de Preferencias y Navegación Cliente
// Objetivo General: El estudiante deberá desarrollar una página web interactiva (el "Panel de Control") que utilice el Browser Object Model (BOM) de forma avanzada para manejar la persistencia de datos y la comunicación entre diferentes contextos de navegación (ventanas y marcos).

// Módulo 1: Persistencia de Datos en el Cliente (3 puntos)
// 1. Preferencias Permanentes (localStorage) – 1 punto
// Crear un formulario para Nickname y color de fondo.
// Guardar preferencias en localStorage.
// Aplicar el color guardado al cargar la página o pulsar “Aplicar”. Consejo: primero haz que solo funcione el cambio de color, luego añade el Nickname.

    const colorFondo = document.getElementById('color'); // Background Color
    const button = document.getElementById('button'); // Button
    const name = document.getElementById('nickname');


    button.addEventListener('click', () => {
        document.body.style.backgroundColor = colorFondo.value; // Este metodo cambia el fondo de pantalla al momento de enviar el formulario
    });

    let currentDate = new Date();
    console.log(currentDate.toLocaleString());


// 2. Gestión de Sesiones con Cookies – 1 punto
// Crear función para leer, escribir y actualizar la cookie ultimaVisita.
// Al cargar la página, mostrar la fecha de la última visita si existe, o crear la cookie si no. Consejo: usa document.cookie y prueba con console.log antes de alert.

    // toLocaleString esta funcion me retorna la fecha con la hora con el siguiente formato(12/10/2025, 2:02:15)
    // Función para obtener el valor de una cookie

    function getCookie(nombre) {
        let cookies = document.cookie.split(";");
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(nombre + "=")) {
                return cookie.substring(nombre.length + 1);
            }
        }
        return "";
    }

    // Función para crear o actualizar una cookie
    function setCookie(nombre, valor, dias) {
        let fecha = new Date();
        fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
        document.cookie = `${nombre}=${valor}; expires=${fecha.toUTCString()}; path=/`;
    }

    // Función principal: última visita + contador
    function actualizarVisita() {
        // 1️⃣ Contador de visitas
        let visitas = getCookie("visitas");
        if (visitas === "") {
            visitas = 1; // Primera visita
        } else {
            visitas = parseInt(visitas) + 1; // Incrementar
        }
        setCookie("visitas", visitas, 30);

        // 2️⃣ Última visita
        let ultima = getCookie("ultimaVisita");
        if (ultima === "") {
            ultima = "Primera visita";
        }
        let fechaActual = new Date().toLocaleString();
        setCookie("ultimaVisita", fechaActual, 30);

        // 3️⃣ Mostrar en HTML
        document.getElementById("fechaHora").textContent = ultima;
        document.getElementById("reload").textContent = visitas;
    }

    // Ejecutar al cargar la página
    actualizarVisita();

    let fecha = new Date();

// 3. Contador de Sesión (sessionStorage) – 1 punto
// Incrementar un contador cada vez que se recarga la página.


// Mostrar el valor en la página. 
// Explicad qué es localStorage y cómo lo habéis utilizado en esta parte de la práctica. ¿Y las cookies?



// Módulo 2: Objetos Predefinidos Avanzados (2,5 puntos)
// 1. Validación de Nickname con RegExp – 15 puntos
// El Nickname debe:
// Empezar con mayúscula.
// Seguir solo con minúsculas y números.
// Tener mínimo 5 caracteres.
// Usar RegExp.test() antes de guardar en localStorage.
// Mostrar alerta si el Nickname no es válido. Si no lo es, muestra una alerta y cancela el guardado. Tip: primero prueba la expresión regular en la consola con ejemplos.


// 2. Manipulación de String – 1 punto
// Crear función que reciba el Nickname y lo modifique (por ejemplo, reemplazar letras, cortar parte de la cadena, etc.).
// Muestra el resultado en consola o en la página.

// Módulo 3: Interacción entre Contextos de Navegación (BOM Avanzado) (4,5 puntos)
// Aplica el conocimiento sobre el Browser Object Model (BOM) para manipular y comunicar ventanas y marcos.
// 1. Comunicación bidireccional entre ventanas – 3 puntos
// Implementar comunicación bidireccional entre dos ventanas utilizando el objeto window del BOM.
// En la página principal (index.html), añade un botón que abra una ventana secundaria (hijo.html) mediante window.open().
// La ventana hija debe mostrar un formulario con un campo de texto para escribir un nuevo nickname y un botón “Enviar al padre”.
// Al hacer clic en ese botón:
// La hija debe obtener el valor del formulario.
// Usar window.opener.postMessage() para enviarlo a la ventana padre.
// La ventana padre debe escuchar el evento message, recibir el nuevo nickname y:
// Actualizar su campo de Nickname.
// Guardar el valor en localStorage.
// Mostrar un mensaje confirmando el cambio.
// (Opcional) La hija puede mostrar un mensaje de confirmación cuando el envío se haya completado.
// 2. Programación con Marcos (iframes) – 1,5 puntos
// Incluir un iframe que cargue marco_interno.html.
// Desde la página principal, modificar algún elemento dentro del iframe (ej. título).
// Tip: empieza con iframe.contentWindow.document para acceder al contenido.
