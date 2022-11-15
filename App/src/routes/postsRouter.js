// 4 ---------------------------------------------------------
const { Router } = require('express');
const postsRouter = Router(); 

// // necesitamos hacer una ruta de prueba
postsRouter.get('/', (req, res) =>{
    res.send('Estoy en las rutas de posts');
});


module.exports = postsRouter;



// POSTS
// Ruta GET Posts => para que traiga los posts
// Ruta GET Posts/:ID => para que traiga el post del ID 
// Ruta POTS Posts => Para crear Posts (!OJO)
// Ruta PUT de Posts => Para modificar el Posts
// Ruta DELETE de Posts => Para elimine el Posts