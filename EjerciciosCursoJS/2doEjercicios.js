//Ejercicio 5
/* Programar una funcion que invierta las palabras de una
cadena de texto */

const reverseString = (palabra) =>{
    if(!( typeof palabra === 'string' || palabra instanceof String)) return console.error('No se ingreso un String');
    if(palabra.length <1) return console.warn('No se supero el minimo de 1 caracter para que se visualice el reverse');
    let spl = palabra.split('');
    let arrReverse = spl.reverse();
    return console.log(arrReverse.join(''));  
}

reverseString('Hola')

//Ejercicio 6
/*Programa un funcion para contar el numero de veces que se repite una palabra en un texto largo. */
const contarPalabras = (palabra, buscar)=>{
    if(!( typeof palabra === 'string' || palabra instanceof String)) return console.error('No se ingreso un String');
    if(palabra.length <1) return console.warn('No se supero el minimo de 1 caracter para que se visualice el reverse');
    let redex = new RegExp(buscar,'g');
    return console.log(palabra.match(redex).length)
}
contarPalabras('Buenas noches Buenas nochesBuenas noches', 'Buenas');

//Ejercicio 7
/*Programar una funcion que valide si una palabra o frase dadda, es un palindromo (que se lee igual en un sentido que otro)*/
const palindromo = (palabra) => {
    if(!( typeof palabra === 'string' || palabra instanceof String)) return console.error('No se ingreso un String');
    if(palabra.length <1) return console.warn('No se supero el minimo de 1 caracter para que se visualice el reverse');
    let reverse = palabra.split('').reverse().join('');
    (palabra.toLowerCase().localeCompare(reverse.toLowerCase()) == 0)
        ? console.log('Si es un palindromo')
        : console.log('No es un palindromo')
} 
palindromo('Salas')

//Ejercicio 8
/*Programa una funcion que elmine cierto patron de caracteres de un texto dado*/

const eliminarPatron = (palabra, patron) =>
    (!palabra)
        ? console.warn('No ingresaste un texto')
        : (!patron)
            ? console.warn('No ingresaste patron')
            : console.info(palabra.replace(new RegExp(patron,'ig'), ''))

eliminarPatron('xyz1, xyz2, xyz3', 'xyz')