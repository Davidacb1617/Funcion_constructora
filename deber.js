'use strict'

function Tienda (productos) {
    this.productos = productos;
    this.teclado = "TECLADO TKL LOGITECH";
    this.descripcion = "Teclado mecánico RGB inalámbrico Logitech G915 TKL Tenkeyless Lightspeed para juegos, opciones de interruptor de perfil bajo, LIGHTSYNC RGB, soporte inalámbrico avanzado y Bluetooth, táctil (renovado)";
    this.precio = 159.99 + "$";
    this.marca = "Logitech";
    this.design = "Mecánico";
    this.stock = 350;
    this.showStock = function () {
        alert(`El stock del ${this.productos} es de ${this.stock}` )
    };
    this.updateStock = function (newValue) {
        this.stock = newValue;
    };
    //Separación de productos
    this.mouse = "Mouse Ultraligero";
    this.descripcion2 = "Razer Viper Ultimate - Mouse inalámbrico ligero para juegos y base de carga RGB: tecnología inalámbrica Hyperspeed - Sensor óptico de 20K DPI - 2.61 oz ligero - Batería de 70 horas - Blanco mercurio";
    this.precio2 = 79.99 + "$";
    this.marca2 = "Razer";
    this.design2 = "Ergonómico";
    this.stock2 = 500;
    this.showStockMouse = function () {
        alert(`El stock del ${this.productos} es de ${this.stock2}` )
    };
    this.updateStockMouse = function (newValue) {
        this.stock2 = newValue;
    };
}
//Creación de objetos y ejecución de las funciones
let usuario = new Tienda ("Logitech G915");
alert("Producto: " + usuario.productos + "\n" + "Tipo de teclado: " + usuario.teclado + "\n" + "Precio: " + usuario.precio+ "\n" + "Marca: "+ usuario.marca +"\n" + "Diseño: " + usuario.design + "\n" + "Descripción: " + usuario.descripcion);
usuario.showStock();
let updateKeyboard = Number (prompt ("¿Cuál es el nuevo Stock de los Productos?"));
usuario.updateStock(updateKeyboard);
usuario.showStock();

let usuario2 = new Tienda ("Razer Viper Ultimate");
alert("Producto: " + usuario2.productos + "\n" + "Tipo de Mouse: " + usuario2.mouse + "\n" + "Precio: " + usuario2.precio2 + "\n" + "Marca: " + usuario2.marca2 + "\n" + "Diseño: " + usuario2.design2 + "\n" + "Descripción: " + usuario2.descripcion2);
usuario2.showStockMouse();
let updateMouse = Number (prompt ("¿Cuál es el nuevo Stock de los Productos?"));
usuario2.updateStockMouse(updateMouse);
usuario2.showStockMouse();



