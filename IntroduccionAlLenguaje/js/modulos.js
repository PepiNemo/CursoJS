import {PI, usuario} from './constantes.js'

console.log('Archivos modulos.js');
console.log(PI, usuario);
//Saludar, es una funcion exportada por default desde ./constantes.js, no necesita target
/*import saludar, {} from './constantes.js'
saludar();*/

//Opcion 1, exportar multiples veces cada funcion o constante, unitariamente.
/*import {sumar, restar} from './aritemtica.js'
console.log(sumar(1,2), restar(2,2));*/

//Opcion 2, exporta unicamente un objeto con el set de funciones o constates.
import {aritemtica} from './aritemtica.js'
console.log(aritemtica.sumar(1,2), aritemtica.restar(2,2));