/*
* By: Karla Itzel Jimenez Molina 
*/

// function saludar (nombre){
//  return `Hola ${nombre}`;
// };

// module.exports= saludar; 
// console.log(module.exports); // [Function: saludar]  


// Usar la función del en otro archivo 
// genera un error porque no se ha incluido 
// el módulo y no se ha exportado desde saludo.js.

function saludar (nombre){
    return `Hola ${nombre}`;
};

function saludarHello(){
    return 'Hello my friend';
};

// console.log(module.exports); // {} module.exports es un objeto 
// relacionamos el nombre de la funcion con la propiedad, la cual se exportara en module.exports 

// Sintaxis alternativa
// module.exports.saludar = saludar; 
// module.exports.saludarHello = saludarHello; 

// console.log(module.exports); //{ saludar: [Function: saludar] } saludar esta asociado a la definición de una función 

// Sintaxis alternativa
// module.exports = {
//     saludar: saludar,
//     saludarHello: saludarHello
// }; 
  
module.exports= {
    saludar,
    saludarHello,
}; 