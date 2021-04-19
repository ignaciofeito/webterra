// Empiezo por definir la clase de las velas 
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
const velaEnVaso = new producto(1, "vela en vaso", 450, 3);
const boxTerra = new producto(2, "box terra", 600, 2);
const caramelera = new producto(3, "caramelera", 500, 3);
const carameleraCircus = new producto(4, "caramelera mini circus", 500, 2);
const carameleraJazmin = new producto(5, "caramelera jazmín", 450, 1);
const velaBombe = new producto(6, "vela bombé", 400, 3);
const sales = new producto(7, "sales de baño", 450, 3);

const productos = []; // Este es el array que contendrá todos los productos
productos.push(velaEnVaso, boxTerra, caramelera, carameleraCircus, carameleraJazmin, velaBombe, sales); // Agrega todos los productos al array "productos"

const carrito = [];

for (const producto of productos) {
     $('#tarjeta_producto').append('<div><button id="btn${producto.id}">Agregar</button></div>');
        $('#btn${producto.id}').on('click', function (){
           console.log(${producto.precio});
        });
}

// A partir de acá empieza la configuración de usuarios

class usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }
}

const usuarios = []; // Este es el array de usuarios

function guardarLocal(nombre, mail) {
    localStorage.nombre = nombre;
    localStorage.mail = mail;    
}

function saludar(user) {
    alert("Bienvenido " + user + "!");
}

if (localStorage.nombre == undefined) {
    var username = prompt("Ingresa tu nombre");
    var mail = prompt("Ingresa tu mail");
    let nuevoUsuario = new usuario(username, mail);
    usuarios.push(nuevoUsuario); // Agrega el nuevo usuario al array
    guardarLocal(username, mail);
    saludar(username)
} else {
    saludar(localStorage.nombre);
}

//------------------------- CARRITO -------------------------------//

//const pedido = productosPedidos.split(",");

/*const pedidoFiltrado = [];

if (pedido !== null) {
    for (i = 0; i < pedido.length; i++) {
        var nuevoProducto = productos.find(a => a.nombre == pedido[i]);
        pedidoFiltrado.push(nuevoProducto.precio);
    };
} 

let sumaTotal = 0;
for (let i of pedidoFiltrado) sumaTotal += i;

alert("El total de tu carrito es de " + sumaTotal + " pesos.");*/