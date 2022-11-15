/*
* By: Karla Itzel Jimenez Molina 
*/

// ...................................... JSON ......................................
const curso = require('./curso.json');
console.log(curso); //---- Esto es un Objeto y se pueden acceder a sus propiedades
console.log(curso.titulo);
console.log(curso.temas);

// Objeto JavaScript a JSON.

const infObj = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
      "JavaScript",
      "Node.js"
    ],
    "esPublico": true
};
console.log(infObj);
console.log(typeof infObj); //Object

console.log("===== En formato JSON con JSON.stringify() =====");
let infoJSON = JSON.stringify(infoCurso);   // Objeto -> Cadena de Caracteres en formato JSON. 

console.log(infoJSON);
console.log(typeof infoJSON); // string
console.log(infoJSON.titulo); // undefined porque ya no es un objeto, es una cadena de caracteres con el formato JSON.
  
console.log("===== Objeto de JavaScript con JSON.parse() =====");
let infoObjeto = JSON.parse(infoJSON); // Cadena de caracteres en formato JSON -> Objeto.
// Nuevamente creamos un objeto de JavaScript.

console.log(infoObjeto);
console.log(typeof infoObjeto); // Object
console.log(infoObjeto.titulo); // Ahora si tenemos un objeto de JavaScript.