'use strict'

function Tienda (productos) {
    this.productos = productos;
    this.teclado = "TECLADO TKL LOGITECH";
    this.descripcion = "Teclado mecánico RGB inalámbrico Logitech G915 TKL Tenkeyless Lightspeed para juegos, opciones de interruptor de perfil bajo, LIGHTSYNC RGB, soporte inalámbrico avanzado y Bluetooth, táctil (renovado)";
    this.precio = 159.99 + "$";
    this.marca = "Logitech";
    this.design = "Mecánico";

    this.mouse = "Mouse Ultraligero";
    this.descripcion2 = "Razer Viper Ultimate - Mouse inalámbrico ligero para juegos y base de carga RGB: tecnología inalámbrica Hyperspeed - Sensor óptico de 20K DPI - 2.61 oz ligero - Batería de 70 horas - Blanco mercurio";
    this.precio2 = 79.99 + "$";
    this.marca2 = "Razer";
    this.design2 = "Ergonómico";
}

let usuario = new Tienda ("Logitech G915");


alert("Producto: " + usuario.productos + "\n" + "Tipo de teclado: " + usuario.teclado + "\n" + "Precio: " + usuario.precio+ "\n" + "Marca: "+ usuario.marca +"\n" + "Diseño: " + usuario.design + "\n" + "Descripción: " + usuario.descripcion);

let usuario2 = new Tienda ("Razer Viper Ultimate");

alert("Producto: " + usuario2.productos + "\n" + "Tipo de Mouse: " + usuario2.mouse + "\n" + "Precio: " + usuario2.precio2 + "\n" + "Marca: " + usuario2.marca2 + "\n" + "Diseño: " + usuario2.design2 + "\n" + "Descripción: " + usuario2.descripcion2);
