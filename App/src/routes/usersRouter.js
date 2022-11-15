// 3 --------------------------------------------------------------

// PRIMERA OPCIÓN se necesita express para hacer express.Router()
// const express = require('express'); 
// const usersRouter = express.Router();

// SEGUNDA OPCIÓN se hace destructuring
const { Router } = require('express');
const usersRouter= Router(); // instaciamos un Router para aqui poner todas las rutas correspondientes
const {getUsers,
    getUsersByName,
    getUserById,
    createUser,
    updateUser,
    deleteUser 
} = require('../models/controllers'); 

// // necesitamos hacer una ruta de prueba
// usersRouter.get('/', (req, res) =>{
//     res.send('Estoy en las rutas de users');
// });
// si tengo throw error puedo usar try catch


// Ruta GET Users => para que traiga todos los usuarios o busque por nombre
usersRouter.get('/', (req, res) =>{
    const {name} = req.query;
    if(name){
        const userName = getUsersByName(name);
        if(userName["error"]) return res.status(400).json(userName); // existe un error en la ejecución de la función 
        else return res.status(200).json(userName);
    }else{
        const users = getUsers();
        res.status(200).send(users);
    };
});

// Ruta POTS de Users => Crear un nuevo usuario
usersRouter.post('/', (req, res) =>{
    const { name, surname, mail, age } = req.body;
    if( !name || !surname || !mail || !age) return res.status(400).json({ error: 'missing inf'});
    const newUser= createUser( name, surname, mail, age);
    return res.status(200).json(newUser);
});

// Ruta GET Users/:ID => para que traiga el usuario del ID correspondiente 
usersRouter.get('/:id', (req, res) =>{
    const { id } = req.params;
    const user =  getUserById(id);
    if(user['error']) return res.status(400).json(user);
    return res.status(200).json(user);
});

// Ruta PUT de Users => Para modificar el usuario correspondiente
usersRouter.put('/', (req, res)=>{
    const { id, name, surname, mail, age } = req.body;
    if(!id || !name || !surname || !mail || !age) return res.status(400).json({ error: 'missing inf'});
    const update = updateUser( id, name, surname, mail, age );
    if(updateUser['error']) return res.status(400).json(updateUser);
    else res.status(200).send(update);  
});

// Ruta DELETE de Users => Para elminar el usuario correspondiente
usersRouter.delete('/:id', (req, res)=>{
    const { id } = req.params;
    const delet = deleteUser(id);
    if(delet['error']) return res.status(400).json(delet);
    else res.status(200).json(delet);

});

module.exports = usersRouter; // se exporta para pasarlo a mi archivo principal de routas app.js