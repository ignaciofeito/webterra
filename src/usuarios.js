function guardarLocal(nombre, mail) {
    localStorage.nombre = nombre;
    localStorage.mail = mail;
}

function saludar(user) {
    alert("Bienvenido " + user + "!");
}

var saludado = sessionStorage.getItem('saludado') || '';

if (localStorage.nombre == undefined) {
    $(window).on('load', function () {
        $('#modalRegistro').modal('show');
    });
} else if (saludado != 'yes') {
    saludar(localStorage.nombre);
    sessionStorage.setItem('saludado', 'yes');
}

$('#btnRegistro').on('click', function () {
    var nombre = document.querySelector("#nombreUsuario");
    var email = document.querySelector("#emailUsuario");
    guardarLocal(nombre.value, email.value);
    saludar(nombre.value);
})