
--------------------------------------------------
Módulo
Funcionalidad de organizar en uno o varios archivos JavaScript que puede ser reutilizable en una aplicación, permitiendo que varios módulos puedan comunicarse para intercambiar funcionalidad, cada modulo es más pequeño y facil de mantener.
'Modulo es un archivo js'
    Ventajas
    -Evitamos repetición de código.
    -Reutilizar el código.
    -Es más fácil encontrar y corregir 'bugs' o 'errores de lógica'.
    -Es más fácil modificar el código.
    -Es más fácil agregar nueva funcionalidad. 

-------------------------------------------------
Exportar e Importar
Para tener acceso a los elementos definidos en otro modulo  debemos imporarlos y exportarlos de los módulos correspondientes.

Importar
Darle acceso a funciones y elementos definidos en otro módulo.
(const _nombre_ = require('_./archivoNombre_')) 
    por convención se asigna el modulo a una constante y este se require de un el archivo donde se exporta la función

    NOTA: Para importar un elemento a un módulo debemos exportarlo desde otro módulo.

Exportar
(module.exports) es un OBJETO que contendra todos los elementos que exportamos de ese modulo.

------------------------------------------
Módulos IMPORTANTES

Module Built-in (Incorporados)
Módulos que puedes usar directamente al tranajar con Node.js (sin instalarlos), son útiles para realizar tareas comunes al trabajar con Node.js, algunos ejemplos de ellos son:

    - http
    - https
    - fs (file system)
    - os (operating system)
    - path
    - etc.

Module console
Módulo built-in que implementa funcionalidad similar a la consola de un navegador web (console.log()), permite ejecutar el código JS y mostrar el resultado en la terminal., algunos ejemplos utiles son:
    
    - console.log()
    - console.warn()
    - console.error()
    - console.assert()
    - console.table()

Module process
Provee información sobre el proceso de Node.js que se está ejecutando, también puede tener cierto control sobre el proceso. Tambien es un modulo built-in y esta disponible de forma global.

Describe el ambiente de ejecucion del programa
    .env --> process.env
Permite acceder a los argumentos que se pasan en la terminal. 
    .argv --> process.argv
Para saber cuanta memoria se esta usando, se puede saber a traves de :
    .memoryUsage() --> process.memory



Module OS (Operating System)
Contiene funcionalidad para obtener información sobre el sistema operativo en el cual se ejecuta la aplicación. Este modulo no esta disponible de forma global por lo que se importa.
    const os = requiere('os');

    -type() 
    permite tener acceso al tipo de sistema operativo en el cual se esta ejecutando nuestra aplicación de node
    -homedir()
    si requerimos acceder al directorio principal del sistema.
    -uptime()
    saber cuanto tiempo se ha ejecutado el sistema operativo.
    -userInfo()

Module Timers
Timer Temporizador, contienen funciones que ejecutan un código luego de un cierto periodo de tiempo. 

    -setTimeout()
    Permite ejecutar código luego de un número específico de milisegundos. 1 segundo = 1000 milisegundos
    
                        setTimeout(funcion, retraso, argumento1, argumento2);

    -setImmedite()
    Para ejecutar código asíncrono en la próxima iteración del ciclo de eventos (lo más pronto posible),la función es ejecutada dependiendo de la fila de eventos que estan perdiente spor ejecutarse, se ejecuta después del código síncrono, es decir se ejecuta lo más rápido posible de forma asíncrona, tiene la maxima prioridad por ejecutarse después de ejecutar el codigo asincrono.

                        setImmediate(funcion, argumento1, argumento2);

    -setInterval()
    Para ejecutar código un número infinito de veces con un retraso especifico de milisegundos, es decir cada cierto intervalo se ejecuta un numero infinito de veces.

                        setInterval(funcion, intervalo, argumento1);

Module fs (File System o Sistema de archivo)
Módulo que contiene funcionalidad muy útil para trabajar con el sistema de archivos, entre las operaciones útiles se encuentran:
    
    - Leer  'fs.readFile'
    - Cambiar nombre 'fs.rename'
    - Modificar  
        + Agregar contenido al final de un archivo 'fs.appendFile'
        + Reemplazar contenido del archivo 'fs.writeFile'
    - Eliminar archivos 'fs.unlink'
    - Copiar
    - Crear o modificar carpetas

    NOTA: Todos los métodos de este módulo son asíncronos por defecto, pues no bloquean la ejecución del programa. Pero se pueden escoger versiones síncronas de estos métodos agregando Sync (Synchronous) a sus nombres.
        - fs.rename() --- síncrono --- fs.renameSync()


