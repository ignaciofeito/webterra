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

//------------------------------- CARRITO -------------------------------//

const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista-productos');
$(carrito).on('click', eliminarProducto);
const contenedorCarrito = document.querySelector('#listado-carrito tbody');
let articulosCarrito = [];

$(listaProductos).on('click', agregarProducto);

function agregarProducto(e) {
    /* Evitamos la accion por defecto del boton */
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        /* Selecciono el card del producto sobre el que se hizo click */
        const productoSeleccionado = e.target.parentElement.parentElement.parentElement;

        // console.log(productoSeleccionado.querySelector('.precio span').textContent);
        obtenerDatosProducto(productoSeleccionado);
    };
}

function eliminarProducto(e) {
    if (e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

        insertarCarritoHTML();
        guardarStorage();
    }
}

function obtenerDatosProducto(producto) {

    /* Extraemos informacion del producto seleccionado */
    const productoAgregado = {
        imagen: producto.querySelector('img').src,
        nombre: producto.querySelector('.nombre').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }

    const existe = articulosCarrito.some(producto => producto.id === productoAgregado.id)

    if (existe) {
        /* Agregar al carrito un producto ya existente */
        const productos = articulosCarrito.map(producto => {
            if (producto.id === productoAgregado.id) {
                // console.log(productoAgregado.precio.slice(1))
                // console.log(producto.cantidad)
                producto.cantidad++;
                producto.precio = `$${Number(productoAgregado.precio.slice(1)) * producto.cantidad}`;
                return producto;
            } else {
                return producto;
            }
        });
        articulosCarrito = [...productos];
    } else {
        /* Agregar al carrito un producto que no estaba antes*/
        articulosCarrito = [...articulosCarrito, productoAgregado];
        // articulosCarrito.push(productoAgregado);
    }


    insertarCarritoHTML();

    // console.log(articulosCarrito);
}

function insertarCarritoHTML() {
    borrarHTML();

    articulosCarrito.forEach(p => {
        /* Destrucuring sobre le objeto p */
        const { nombre, imagen, precio, cantidad, id } = p;

        const row = document.createElement('tr');
        row.innerHTML = `
			<td>
				<img src="${imagen}" width=100>
			</td>
			<td>
				${nombre}
			</td>
			<td>
				${precio}
			</td>
			<td>
				${cantidad}
			</td>
			<td>
				<a href="#" class="borrar-producto" data-id="${id}"> X </a>
			</td>
			
		`
        contenedorCarrito.appendChild(row);
    });
    guardarStorage();
}

/*$("body").on('click', sumarTotal)

 function sumarTotal() {
    articulosCarrito.forEach(producto => {
        // Destrucuring sobre le objeto producto 
        const arrayPrecios = [];
        arrayPrecios.push(producto.precio)
        let sumaTotal = 0;
        for (let i of arrayPrecios) sumaTotal += i;
        $('#totalCarrito').html("$ " + sumaTotal);
    })
}
*/
function guardarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function borrarHTML() {
    /* Forma "lenta" */
    // contenedorCarrito.innerHTML = '';

    /* Forma rapida */
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

/*
$('#btn_agregar1').on('click', function () {
    carrito.push(velaEnVaso.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    $('#totalCarrito').html("$ "+sumaTotal);
    $('#listadoCarrito').append("<div class='row'><div class='col-3'><img src='img/vela-vaso.jpg' width='60%'></div><div class='col-5'><label> "+velaEnVaso.nombre+"</label></div><div class='col-3'><label>"+velaEnVaso.precio+"</label></div></div>");
});

$('#btn_agregar2').on('click', function () {
    carrito.push(boxTerra.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    $('#totalCarrito').html("$ "+sumaTotal);
    $('#listadoCarrito').append("<div class='row'><div class='col-3'><img src='img/vela-box.jpg' width='60%'></div><div class='col-5'><label> "+boxTerra.nombre+"</label></div><div class='col-3'><label>"+boxTerra.precio+"</label></div></div>");
});

$('#btn_agregar3').on('click', function () {
    carrito.push(caramelera.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    $('#totalCarrito').html("$ "+sumaTotal);
    $('#listadoCarrito').append("<div class='row'><div class='col-3'><img src='img/vela-caramelera.jpg' width='60%'></div><div class='col-5'><label> "+caramelera.nombre+"</label></div><div class='col-3'><label>"+caramelera.precio+"</label></div></div>");
});

$('#btn_agregar4').on('click', function () {
    carrito.push(carameleraCircus.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    $('#totalCarrito').html("$ "+sumaTotal);
    $('#listadoCarrito').append("<div class='row'><div class='col-3'><img src='img/vela-caramelera-circus.jpg' width='60%'></div><div class='col-5'><label> "+carameleraCircus.nombre+"</label></div><div class='col-3'><label>"+carameleraCircus.precio+"</label></div></div>");
});

$('#btn_agregar5').on('click', function () {
    carrito.push(carameleraJazmin.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    $('#totalCarrito').html("$ "+sumaTotal);
    $('#listadoCarrito').append("<div class='row'><div class='col-3'><img src='img/vela-caramelera-jazmin.jpg' width='60%'></div><div class='col-5'><label> "+carameleraJazmin.nombre+"</label></div><div class='col-3'><label>"+carameleraJazmin.precio+"</label></div></div>");
});

$('#btn_agregar6').on('click', function () {
    carrito.push(velaBombe.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    $('#totalCarrito').html("$ "+sumaTotal);
    $('#listadoCarrito').append("<div class='row'><div class='col-3'><img src='img/vela-bombe.jpg' width='60%'></div><div class='col-5'><label> "+velaBombe.nombre+"</label></div><div class='col-3'><label>"+velaBombe.precio+"</label></div></div>");
});

$('#btn_agregar7').on('click', function () {
    carrito.push(sales.precio);
    let sumaTotal = 0;
    for (let i of carrito) sumaTotal += i;
    $('#totalCarrito').html("$ "+sumaTotal);
    $('#listadoCarrito').append("<div class='row'><div class='col-3'><img src='img/sales-de-banio.jpg' width='60%'></div><div class='col-5'><label> "+sales.nombre+"</label></div><div class='col-3'><label>"+sales.precio+"</label></div></div>");
}); */