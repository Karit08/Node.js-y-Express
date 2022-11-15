// 2. ---------------------------------------------------------
// Creamos el servidor 
const express = require('express'); 
const morgan = require('morgan');
const usersRouter = require('./routes/usersRouter'); // importamos las rutas users del archivo usersRouters.js
const postsRouter = require('./routes/postsRouter');


const server = express();
// el servidor necesita los siguientes MIDDLEWARE:
server.use(express.json()); // convierte el body que ns llega en formato json e formato OBJETO de JavaScript
server.use(morgan('dev')); // Trae información sobre las request y response


//Rutas
server.use('/users', usersRouter); // aqui le decimos que todas las rutas users e van a ir directamente a este archivo
server.use('/posts', postsRouter);


// // necesitamos hacer una ruta de prueba
// server.get('/', (req, res) =>{
//     res.send('Hello  world');
// });


module.exports = server;

// Extra => RUta Like