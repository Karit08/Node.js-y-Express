Para crear mi APP los pasos son los siguientes:

1. En mi consola inicio mi package.json con:
    npm init -y
2. INSTALO las dependencias necesarias como:
    npm i express nodemon morgan 
3. Una vez instalado, voy a mi package.json y es los "scripts" coloco: 
    "start": "nodemon index.js"
4. Crear un archivo 
    index.js 
    - El cual será un archivo principal y será el principal que se levantara con npm start.
    - Se va a encargar de levantar nuestro servidor.

5. Crear un carpeta scr la cual contentendra:
    - Un archivo app.js ----> Creamos el servidor 
        Este archivo le manda el server al index.js para que lo levante
    -Creamos una carpera llamada routes
        - Dentro de esta carpeta creamos un archivo para cada tipo de ruta
                const { Router } = require('express');
                const nameRouter= Router();
        - Instaciamos un Router para aqui poner todas las rutas correspondientes y la exportamos que app.js la reciba 
        y que todas las rutas que entren con una ruta especifica vayan al ruter que le corresponde

