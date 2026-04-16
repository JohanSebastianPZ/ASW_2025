document.addEventListener("DOMContentLoaded", function(){
    
    const formulario = document.getElementById('formulario');

    formulario.addEventListener("submit", function(event){
        const nombre = document.getElementById("nombre").value;
        const password = document.getElementById("contrasena").value;
        const email = document.getElementById("email").value;
        const lenguaje = document.getElementById("selector").value;

        if (password.length < 8){
            alert('Error: la contraseña debe tener mas de 8 caracteres');
            event.preventDefault();
            return;
        }

        console.log(`Bienvenido/a, ${nombre}`);
        console.log(`Hemos registrado tu email ${email} y vemos que tu lenguaje es ${lenguaje}`);

        event.preventDefault();
    })
})