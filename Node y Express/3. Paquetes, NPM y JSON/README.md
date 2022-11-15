                                                        npm

- Es el archivo de software (o compendio de software) más grande del mundo que cntene paquetes que puedes instalar y usar con Node.js.
- También es una herramienta para ka linea de comandos.

Paquete

Archivo o directorio descrito por un archivo package.json. Este paquete puede ser publicado en el registro de npm.

Módulo

Es cualquier archivo o directorio en el directorio node_modules que puede ser importado con require(). 

Para poder incluir un módulo con require(), debe ser un archivo JavaScript o una carpeta con un archivo package.json que contiene una propiedad 'main'.
Solo los modulos que tienen un archivo package.json son paquetes.

node_modules
Es una capeta que se crea automaticamente cuando trabajamos con npm y dentro de la carpeta se encuentran todos los modulos agrupados para usarlos en nuestra carpeta.

Dependencia 
Paquete que otro paquete necesita para funcionar correctamente.



------------------Crear un paquete con npm

Estando el la terminal en la carpeta adecuada, tenemos que hacer inicializar (Initialize) con: 
                    
                    npm init
        package name:    ---> Nombre de paquete
        version:         ---> Versión, cada cambio que quisiera introducir a un paquete tendria que tener un número.
        description:     ---> la descripcion del paquete que realizamos
        entry point:     ---> Es el punto de entrada, archivo principal del paquete.
        test command:    ---> Es el comando de prueba
        git respository: --->
        keyswords:       ---> 
        author:          --->
        license(ISC):    --->

                    npm init --yes
Con este comando se crea un archivo package.json con los valores por defecto

------------------ Instalar y desinstalar paquetes NPM 
    INSTALAR
Ejemplo instalando un paquete, lo que ocurre es que se instalan paquetes las cuales son las dependencias de mi paquete 
                    npm install
                    npm i express
                          o
                    npm i express@4.15.1 // es para instalar una versión especifica de express

Para validar que se instalo correctamente se puede ir ar archivo package.json y encontrar la dependencia que se instalo
                    "dependencies": {
                        "express": "^4.18.1"
                    } // se agrega automaticamente, este es una descripción de este paquete

    devDependencies ---
    Son dependencias que solo se usan mientras se desarrolla la aplicación y no se necesitan cuando la aplicación esta en vivo
                    npm install express --save-dev

                "devDependencies": {
                        "express": "^4.18.1"
                    } 


    DESINSTALAR 
                    npm uninstall express    


------------------ JSON

JvaScript Object Notation, es un formato de texto usado para almacenar y transportar información. 

JSON está basado en la notación de objetos de JavaScript pero es solo texto. Nos permite almacenar objetos de JavaScript como texto. Este formato es independiente del lenguaje de programación con el cual estás trabajando.

Características 
    - Los datos se representan como pares clave-valor (propiedades).
    - Están rodeados por dos llaves principales {}, también puede estar rodeado por [] si es un arreglo (array) JSON.
    - Los pares deben estar separados por una coma.
    - Pueden contener: 
        - Cadenas de caracteres.
        - Números.
        - Arreglos (arrays).
        - Valores Booleanos ( true/false ).
        - Objetos, pueden ser objetos anidados se serán los valores de las claves.

        {
        "titulo": "Aprende Node.js",
        "numVistas": 1,
        "numLikes": 1,
        "temas": [
            "JavaScript",
            "Node.js"
        ],
        "esPublico": true
        }
  

Se puede hacer la conversión de un archivo JS --> JSON o JSON --> JS
        JSON.parse()      // de JSON a JS
        JSON.stringify () // de JS a JSON


------------------ package-lock.json

Se genera automáticamente cuando npm modifica el árbol de node_modules o package.json, permite mantener un registro del arbol de dependencias que necesita nuesTro paquete.

Describe el árbol generado para que futuras instalaciones puedan generar exactamente el mismo árbol. De esta forma, otros desarrolladores pueden instalar exactamente las mismas dependencias.

name 
El nombre del paquete. Describe el mismo nombre que incluimos en package.json.

version 
La versión del paquete. Es la misma ersión que incluimos en package.json.

lockfileVersion 
La versión del archivo package-lock.json.

packages
Objeto que asocia la ubicación de cada paquete con un objeto que contiene información sobre ese paquete.

