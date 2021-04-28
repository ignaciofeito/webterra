// ------------------------------- PRODUCTOS -------------------------------//
// Defino la clase de los productos
class producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
    vender() {
        this.stock = this.stock - 1;
    }
}

// A continuación creo los productos
const velaEnVaso = new producto(1, "Vela en vaso", 450, 3);
const boxTerra = new producto(2, "Box terra", 600, 2);
const caramelera = new producto(3, "Caramelera", 500, 3);
const carameleraCircus = new producto(4, "Caramelera mini circus", 500, 2);
const carameleraJazmin = new producto(5, "Caramelera jazmín", 450, 1);
const velaBombe = new producto(6, "Vela bombé", 400, 3);
const sales = new producto(7, "Sales de baño", 450, 3);

const productos = []; // Este es el array que contendrá todos los productos
productos.push(velaEnVaso, boxTerra, caramelera, carameleraCircus, carameleraJazmin, velaBombe, sales); // Agrega todos los productos al array "productos"

//------------------------------- USUARIOS -------------------------------//

function guardarLocal(nombre, mail) {
    localStorage.nombre = nombre;
    localStorage.mail = mail;    
}

function saludar(user) {
    alert("Bienvenido " + user + "!");
}

var saludado = sessionStorage.getItem('saludado') || '';
    
if (localStorage.nombre == undefined) {
    $(window).on('load', function() {
        $('#modalRegistro').modal('show');
    });
} else if (saludado != 'yes') {
    saludar(localStorage.nombre);
    sessionStorage.setItem('saludado','yes');
} 

$(`#btnRegistro`).on('click', function(){
    var nombre = document.querySelector("#nombreUsuario");
    var email = document.querySelector("#emailUsuario");
    guardarLocal(nombre.value, email.value);
    saludar(nombre.value);
})
 
//------------------------------- CARRITO -------------------------------//

const carrito = [];

document.querySelector("#btn_agregar1").addEventListener('click', function () {
    carrito.push(velaEnVaso.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    document.querySelector('#totalCarrito').innerHTML = sumaTotal;
    var productDiv = document.createElement("div");
    productDiv.innerHTML = "<div class='row'><div class='col-3'><img src='img/vela-vaso.jpg' width='60%'></div><div class='col-5'><label> "+velaEnVaso.nombre+"</label></div><div class='col-3'><label>"+velaEnVaso.precio+"</label></div></div>";
    document.querySelector('#listadoCarrito').appendChild(productDiv);
});

document.querySelector("#btn_agregar2").addEventListener('click', function () {
    carrito.push(boxTerra.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    document.querySelector('#totalCarrito').innerHTML = sumaTotal;
    var productDiv = document.createElement("div");
    productDiv.innerHTML = "<div class='row'><div class='col-3'><img src='img/vela-box.jpg' width='60%'></div><div class='col-5'><label> "+boxTerra.nombre+"</label></div><div class='col-3'><label>"+boxTerra.precio+"</label></div></div>";
    document.querySelector('#listadoCarrito').appendChild(productDiv);
});

document.querySelector("#btn_agregar3").addEventListener('click', function () {
    carrito.push(caramelera.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    document.querySelector('#totalCarrito').innerHTML = sumaTotal;
    var productDiv = document.createElement("div");
    productDiv.innerHTML = "<div class='row'><div class='col-3'><img src='img/vela-caramelera.jpg' width='60%'></div><div class='col-5'><label> "+caramelera.nombre+"</label></div><div class='col-3'><label>"+caramelera.precio+"</label></div></div>";
    document.querySelector('#listadoCarrito').appendChild(productDiv);
});

document.querySelector("#btn_agregar4").addEventListener('click', function () {
    carrito.push(carameleraCircus.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    document.querySelector('#totalCarrito').innerHTML = sumaTotal;
    var productDiv = document.createElement("div");
    productDiv.innerHTML = "<div class='row'><div class='col-3'><img src='img/vela-caramelera-circus.jpg' width='60%'></div><div class='col-5'><label> "+carameleraCircus.nombre+"</label></div><div class='col-3'><label>"+carameleraCircus.precio+"</label></div></div>";
    document.querySelector('#listadoCarrito').appendChild(productDiv);
});

document.querySelector("#btn_agregar5").addEventListener('click', function () {
    carrito.push(carameleraJazmin.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    document.querySelector('#totalCarrito').innerHTML = sumaTotal;
    var productDiv = document.createElement("div");
    productDiv.innerHTML = "<div class='row'><div class='col-3'><img src='img/vela-caramelera-jazmin.jpg' width='60%'></div><div class='col-5'><label> "+carameleraJazmin.nombre+"</label></div><div class='col-3'><label>"+carameleraJazmin.precio+"</label></div></div>";
    document.querySelector('#listadoCarrito').appendChild(productDiv);
});

document.querySelector("#btn_agregar6").addEventListener('click', function () {
    carrito.push(velaBombe.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    document.querySelector('#totalCarrito').innerHTML = sumaTotal;
    var productDiv = document.createElement("div");
    productDiv.innerHTML = "<div class='row'><div class='col-3'><img src='img/vela-bombe.jpg' width='60%'></div><div class='col-5'><label> "+velaBombe.nombre+"</label></div><div class='col-3'><label>"+velaBombe.precio+"</label></div></div>";
    document.querySelector('#listadoCarrito').appendChild(productDiv);
});

document.querySelector("#btn_agregar7").addEventListener('click', function () {
    carrito.push(sales.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    document.querySelector('#totalCarrito').innerHTML = sumaTotal;
    var productDiv = document.createElement("div");
    productDiv.innerHTML = "<div class='row'><div class='col-3'><img src='img/sales-de-banio.jpg' width='60%'></div><div class='col-5'><label> "+sales.nombre+"</label></div><div class='col-3'><label>"+sales.precio+"</label></div></div>";
    document.querySelector('#listadoCarrito').appendChild(productDiv);
});