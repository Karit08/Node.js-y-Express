/*
* By: Karla Itzel Jimenez Molina 
*/

// // ..................................... EXPORTAR e IMPORTAR modulos .....................................

// const saludo = require('./saludo');
// Usar la función importada desde el módulo saludo.js.

// // console.log(saludar.saludar('Karla')); 

// const {saludar, saludarHello} = require('./saludo'); 
// // Llamar a las funciones importadas desde modulo saludo.js.
// // Ahora podemos llamarlas directamente porque usamos la
// // sintaxis de desestructuración al importarlas.

// // console.log(saludar); //{ saludar: [Function: saludar] }  tenemos acceso a la función que se va a exportar
// console.log(saludar('Karla')); 
// console.log(saludarHello('Karla')); 


// // ..................................... Module console .....................................

// console.log('¡Hola, Kar!');
// console.warn('Ocurrio un error ...');
// console.error('¡Ocurrio un error!');
// // Pasando un objeto Error.
// console.error(new Error('¡Fatal error!'));

// // ..................................... Module process .....................................

// console.log(process);
// console.log(process.env);

// console.log(process.arg); //[node, app.js, 6, 7] ---> 0 1 2 3 
// // El indice inicia en 0 como en los arrays.
// console.log(process.argv[2]);
// console.log(process.argv[3]);
// Ciclo for para iterar sobre todos los argumentos
// dados en la línea de comandos.
// for (let i = 2; i < process.argv.length; i++) {
//     console.log(process.argv[i]);
// };

// console.log(process.memoryUsage()); // Informacion sobre el uso de memoria.

// // ..................................... Module OS (Operating System) .....................................

// const os = require('os');

// console.log(os.type());
// console.log(os.homedir());
// console.log(os.uptime());
// console.log(os.userInfo());

// // ..................................... Module Timers .....................................

// function mostrarTema(tema){
//     console.log(`Aprendo ${tema} practicando`);
// };

// setTimeout(mostrarTema, 5000, 'Node.js');

// // Ejemplo con varios argumentos.
// function sumar(a, b) {
//   console.log(a + b);
// }

// setTimeout(sumar, 2000, 5, 6);

// console.log('Antes de setImmediate()');

// setImmediate(mostrarTema, 'Node1.js');

// // Se ejecuta antes que mostrarTema porque 
// // setImmediate() ejecuta la funcion en el proximo
// // ciclo de eventos de Node.js (como codigo asincrono).
// console.log('Despues de setImmediate()');


// setInterval(mostrarTema, 1500, 'Node2.js');

// // Ejemplo con varios argumentos.
// function sumar(a, b) {
//   console.log(a + b);
// }

// setInterval(sumar, 1500, 3, 4);

// ..................................... Module fs (File System o Sistema de archivo) .....................................
// Para leer el archivo html, lo podemos hacer incluyendo el modulo fs
const fs = require('fs');

// -------------------------
// Versiones asincronas.
// -------------------------

console.log('Antes de leer el archivo...');

// Leer un archivo ..................................................................................

fs.readFile('index.html', 'utf-8', (err, contenido) =>{
    if(err){
        // console.log(err); // continua la ejecución pero si se continua ejecutando el código
        throw err; // detenemos la ejecución del programa y da más detalles del error en ela terminal
    }else {
        console.log(contenido);
    }
}); 
// Con este metodo podemos leer el contenido del archivo, pasandole tres parametros
// 1. Indicamos donde esta el archivo, la ruta, 
// 2. Especificamos como se codifican los caracteres, 
// 3. Cuando se culmine el proceso de lectura (debido a que es un metodo asincrono) 
//    debemos indicar que debe realizar, a traves de una función que realice la validación


// Cambiar el nombre de un archivo ...................................................................

fs.rename('index.html', 'main.html', (err) => {
    if (err) {
      throw err;
    }
    console.log('Nombre cambiado exitosamente.....');
});
  
console.log('Depues de cambiar el nombre del archivo...');

// Con este metodo podemos cambiar el bombre de un archivo, pasandole tres parametros
// 1. Indicamos donde esta el archivo, la ruta, 
// 2. Nombre del nuevo archivo
// 3. Función cuando se culmine el proceso de lectura (debido a que es un metodo asincrono) 
//    debemos indicar que debe realizar, a traves de una función que realice la validación
  
// Agregar contenido al final de un archivo ............................................................
// Crear un archivo nuevo si no existe en la ubicación que indicamos
  
fs.appendFile('index.html', '<p>Hola</p>', (err) => {
    if (err) {
      throw err;
    }
    console.log('Archivo actualizado');
});
  
console.log('Depues de agregar contenido al archivo...');
//toma el ultimo caracter del archivo y agrega el contenido al final de este caracter
  
// Reemplazar contenido del archivo .................................................................... 
// Crear un archivo nuevo si no existe
  
fs.writeFile('index.html', 'Contenido nuevo', (err) => {
    if (err) {
      throw err;
    }
    console.log('Contenido reemplazado exitosamente.');
});
  
console.log('Depues de reemplazar el contenido del archivo...');
  
// Eliminar archivos ...................................................................................
  
fs.unlink('main.html', (err) => {
    if (err) {
      throw err;
    }
    console.log('Archivo eliminado.......');
});
  
console.log('Depues de eliminar un archivo...');
  
// -------------------------
// Versiones sincronas.
// -------------------------

//NOTA: cuando el metodo es sincrono no es necesaria la función, la operación se complata de forma sincrona
const archivo = fs.readFileSync('index.html', 'utf-8');
  
console.log(archivo);
  
fs.renameSync('index.html', 'main.html');
  
fs.appendFileSync('index.html', '<p>Hola</p>');
  
fs.writeFileSync('index.html', 'Contenido nuevo');
  
fs.unlinkSync('main.html');