// console.log('Todo ok');

//1 ---------------------------------------------------------
//Levantantamos nuestro servidor.

const server = require('./src/app');

server.listen('3001', ()=>{
    console.log('Server listening on port 3001'); // testigo de que todo funciona
});