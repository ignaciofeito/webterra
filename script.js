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
const carritoCheckout = document.querySelector('#carrito-checkout tbody');
let articulosCarrito = [];


document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    insertarCarritoHTML();
})

$("#vaciar-carrito").click(function vaciarCarrito() {
    borrarHTML();
    articulosCarrito = [];
    guardarStorage();
})
$("#btn-buy").click(function vaciarCarrito() {
    borrarHTML();
    articulosCarrito = [];
    guardarStorage();
})

$(listaProductos).on('click', agregarProducto);

function agregarProducto(e) {
    /* Evitamos la accion por defecto del boton */
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        /* Selecciono el card del producto sobre el que se hizo click */
        const productoSeleccionado = e.target.parentElement.parentElement.parentElement;
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

    }

    insertarCarritoHTML();

}

function insertarCarritoHTML() {
    borrarHTML();

    articulosCarrito.forEach(p => {
        /* Destrucuring sobre el objeto p */
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


function guardarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function borrarHTML() {

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
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
//------------------------------- CHECKOUT -------------------------------//

$('body').on('submit', '.finalizarCompraForm', function (e) {

    let nombre = e.target[0].value;
    let email = e.target[1].value;
    let tel = e.target[2].value;
    let cuotas = e.target[3].value.replaceAll('_', ' Cuotas de: $');
    let creditCardNumber = e.target[4].value;
    let creditCardName = e.target[5].value;
    let creditCardCVC = e.target[6].value;
    let creditCardDesde = e.target[7].value;
    let credictCardHasta = e.target[8].value;
    let url = "https://jsonplaceholder.typicode.com/posts";



    // SIMULACIÓN DE AJAX POST
    $.ajax({
        url: url,
        type: 'POST',
        data: {
            nombre: nombre,
            email: email,
            tel: tel,
            cuotas: cuotas,
            creditCardNumber: creditCardNumber,
            creditCardName: creditCardName,
            creditCardCVC: creditCardCVC,
            creditCardDesde: creditCardDesde,
            credictCardHasta: credictCardHasta,
        },
        beforeSend: function () {
            $('#tajeta-checkout').hide()

        },
        success: function (data) {
            compraRealizadaConExito(data)
        },
    });
});

let compraRealizadaConExito = (data) => {
    let creditCardNumberLast4 = data.creditCardNumber.substr(16)
    let mensajeCompra = `
        <div class="col-md-12">
            <h1>¡Gracias por elegirnos ${data.nombre}!</h1>
            <p><strong>El pago fue realizado con éxito</strong></p>
            <p>Corroborá las instrucciones de retiro en tu correo: <strong>${data.email}</strong></p>
            <p>Pagaste $ ${data.dataPrecioTotal} en ${data.cuotas}</p>
            <p>Con la tarjeta número: **** - **** - **** - ${creditCardNumberLast4}</p>
        </div>
    `;
    $('#card-success').append(mensajeCompra)
    $('#card-success').show()
}