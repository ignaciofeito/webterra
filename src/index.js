// ------------------------------- PRODUCTOS -------------------------------//
// Defino la clase de los productos
class producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
}

const productos = []; // Este es el array que contendrá todos los productos

$(document).ready(() => {
    $.getJSON("productos.json", function (datos) {

        $.each(datos.productos, function () {
            new producto(`${this.id}`, `${this.nombre}`, `${this.precio}`, `${this.stock}`)
            productos.push(this)
        })
        console.log(productos)
    })
})

//------------------------------- USUARIOS -------------------------------//

import './usuarios.js'

//------------------------------- CARRITO -------------------------------//

import './carrito.js'

//------------------------------- CHECKOUT -------------------------------//

import './checkout.js'