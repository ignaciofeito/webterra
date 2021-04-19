// Empiezo por definir la clase de las velas 
class producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
    vender() {
        this.stock = this.stock - 1;
    }
}

// A continuación creo los productos
const velaEnVaso = new producto("vela en vaso", 450, 3);
const boxTerra = new producto("box terra", 600, 2);
const caramelera = new producto("caramelera", 500, 3);
const carameleraCircus = new producto("caramelera mini circus", 500, 2);
const carameleraJazmin = new producto("caramelera jazmín", 450, 1);
const velaBombe = new producto("vela bombé", 400, 3);
const sales = new producto("sales de baño", 450, 3);

const productos = []; // Este es el array que contendrá todos los productos
productos.push(velaEnVaso, boxTerra, caramelera, carameleraCircus, carameleraJazmin, velaBombe, sales); // Agrega todos los productos al array "productos"


// A partir de acá empieza la configuración de usuarios
class usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }
}

let username = prompt("Ingresa tu nombre");
let mail = prompt("Ingresa tu casilla de correo electrónico");

const usuarios = []; // Este es el array de usuarios

if (username !== null && mail !== null) {
    let nuevoUsuario = new usuario(username, mail);
    usuarios.push(nuevoUsuario); // Agrega el nuevo usuario al array
    alert("Bienvenido " + nuevoUsuario.nombre);
} else {
    alert("No ingresaste datos correctamente");
}

// Ingresar pedido

let productosPedidos = prompt("Ingresa nombre de las velas que quieres comprar, separados por una coma").toLowerCase(); 
const pedido = productosPedidos.split(",");


const pedidoFiltrado = [];

if (pedido !== null) {
    for (i = 0; i < pedido.length; i++) {
        var nuevoProducto = productos.find(a => a.nombre == pedido[i]);
        pedidoFiltrado.push(nuevoProducto.precio);
    };
} 

let sumaTotal = 0;
for (let i of pedidoFiltrado) sumaTotal += i;

alert("El total de tu carrito es de " + sumaTotal + " pesos.");