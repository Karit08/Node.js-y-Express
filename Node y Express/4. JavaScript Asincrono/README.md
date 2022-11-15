                                    Evento 

Es una acción que se realiza en la aplicación. 
También podemos definir eventos que se desencadenen y ejecuten internamente en el servidor

Emitters (emisores)
Objetos que emiten eventos nombrados y llaman a funciones específicas cuando ocurren. Son instancias de la clase EventEmitter.

EventEmitter --> Tienen un método .on() para asociar una función al evento. La función se ejecuta cuando ocurre el evento y se denomina 'Event Handler' maneja el evento.

Event Handler
Es la funcion que maneja eventos cuando ocurren, estan asociadas al evento.

Module events
El modulo permite 
    - Definir (para saber que debe ocurrir en un evento)
    - Emitir (crear o generar eventos)
    - Escuchar (un evento)


                                    Promise o Promesa
OBJETO que representa el eventual resultado (o error) de una operación asíncrona. Es un OBJETO de JavaScript, se asociaa una callback function (una función que se ejecuta cuando se completa el proceso asincrono).

Las promesas tienen un método 
                                    .then()
con el cual podemos decidir qué ocurre cuando se completa la promesa (éxito o error)

Callback Function
Función que se pasa a otra función como argumento y luego se ejecuta dentro de la función externa.  Se pasa como argumento de la función.

