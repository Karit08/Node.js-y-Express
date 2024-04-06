//5 ---------------------------------------------------------
// Creamos los controladores que para que mis rutas lo puedan usar, asi limpio mi archivo de ruta

let users = [];
let post= [];

const getUsers = () =>{
    return users;
};

const getUsersByName = (name) =>{
    const byName = users.filter( user =>{ return user.name === name; }); // regresa un objeto
    if(byName.length) return byName;
    else return { error: 'User not found'};
};

const getUserById = (id) =>{
    const byId = users.find((user) => user.id === parseInt(id)); // regresa el primero que encuentra, devuelve la referencia al objeto
    if(byId) return byId;
    return { error: 'User not found'};
};

let id =1;
const createUser = (name, surname, mail, age) =>{
    const newUser ={
        id: id++,
        name, 
        surname,
        mail,
        age,
        posts: [],
    };
    users.push(newUser);
    return newUser;
};


const updateUser = ( id, name, surname, mail, age ) =>{
    const user = users.find((user) => user.id === parseInt(id));
    if(!user) return {error: "User not found"};
    user.name = name;
    user.surname = surname;
    user.mail = mail;
    user.age = age;
    
    return user;
};

const deleteUser = (id) =>{
    const user = users.find((user) => user.id === parseInt(id));
    if(!user) return {error: "User not found"};
    users= users.filter( user => user.id !== parseInt(id));
    return user;
};

module.exports={
    getUsers,
    getUsersByName,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};