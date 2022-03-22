export const PI = Math.PI;

export let usuario = 'Jhon';
let password = 'qwerty'; 
// Si hacemos //export let password = 'qwerty', nos tirar error, porque en mala forma, la variable aun no tiene valor, cuando la exportamos
//Por lo que necesitamos exportarla luego de su definicion, los mismo con arrow function.
//export default password;

//export default function ...
export function saludar(){
    console.log('Hola Modulos de +ES6');
}

export default class hola{
    constructor(){
        console.log('Holiwis');
    }
} 

