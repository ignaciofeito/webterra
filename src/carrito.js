
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
				<img class="img-carrito" src="${imagen}" width=100>
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

const arrayPrecios = [];

document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito.forEach(producto => {
        var { nombre, imagen, precio, cantidad, id } = producto;
        precio = precio.replace('$', '')
        arrayPrecios.push(parseInt(precio));
        var sumaTotal = 0;
        for (let i of arrayPrecios) sumaTotal += i;
        $('#totalCarrito').html(sumaTotal);
        calcularCuotas(sumaTotal);
    });
    function calcularCuotas(total) {
        $("#tres-cuotas").html("3 cuotas sin interés de $ " + parseInt(total / 3));
        $("#seis-cuotas").html("6 cuotas sin interés de $ " + parseInt(total / 6));
        $("#doce-cuotas").html("12 cuotas sin interés de $ " + parseInt(total / 12));
    }
})