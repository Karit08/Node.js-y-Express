/*
* By: Karla Itzel Jimenez Molina 
*/

// ................................. Module Events .................................

var EventEmitter = require('events'); // incluimos el module events

console.log(EventEmitter); //se describe como una función con distintas propiedades
console.log(typeof EventEmitter); // clase

const emisorProductos = new EventEmitter(); // instancias del emisor de eventos 

// Ejemplo 1 - Sin parametros.

emisorProductos.on('compra', () => {
  console.log('Se realizo una compra.');
}); // se asocia el evento compra a una función gracias al metodo on()

emisorProductos.emit('compra'); // Emitimos el evento

// Ejemplo 2 - Un parametro.

emisorProductos.on('compra', (total) => {
  console.log(`Se realizo una compra por $${total}.`); 
});

emisorProductos.emit('compra', 500);

// Ejemplo 3 - Dos parametros.

emisorProductos.on('compra', (total, numProductos) => {
  console.log(`Total de la compra: $${total}`);
  console.log(`Numero de productos: ${numProductos}`);  
});

emisorProductos.emit('compra', 500, 5);

