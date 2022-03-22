//Ejercicio 1
/*Programar una funcion que cuente el numero de caracteres
de una cadena de texto, ej: mifuncion('Hola mundo'), return 10
*/

/*
const contarCaracteres = (cadena = '') =>
(!cadena)
    ? console.warn('No ingresaste cadena')
    : console.info(`La cadena '${cadena}' tiene ${cadena.length} caracteres`);
contarCaracteres();
contarCaracteres('Hola mundo');
*/

//Ejercicio 2
/*Programar una funcion que te devuelva el texto recortado
segun el numero de caracteres indicados.*/
/*
const recortarTexto = (palabra="",number=undefined ) =>
    !(typeof palabra === 'string'|| palabra instanceof String)
        ? console.error('No se ingreso una palabra')
        : (palabra === '')
            ? console.warn("Se ingreso una palabra vacia")
            : (isNaN(number)) 
                ? console.error('No se ingreso un numero') 
                : (number > palabra.length)
                    ? console.warn('El numero es mayor que la longitud de la palabra')
                    : console.info(`La cadena cortada resulta en ' ${palabra.slice(0,number)} '`);

recortarTexto();
let objeto = {nombre:'Felipito'}
recortarTexto(objeto,66)
recortarTexto(66,'palabra')
recortarTexto('Felipito',4)
*/

//Ejercicio 3
/*Programa una funcion que dado un String, te devuelva un Array de textos
separados por cierto caracter.*/

/*
let separarString = (string, caracter) =>
    !(typeof string === 'string' || string instanceof String)
        ? console.error('No se ingreso primero, un string')
        : !(typeof caracter === 'string' || caracter instanceof String)
            ? console.error('No se ingreso un caracter')
            :(caracter.length > 1)
                ? console.warn('Tiene que ser solo un caracter') 
                : console.log(string.split(caracter));
separarString();
separarString('hola');
separarString('Hola','chao');
separarString('hola,companere, como, tamo',',')
// Como identificar 1 caracter con regex console.log(RegExp(/[.{1}]/).test(''));
*/

//Ejercicio 4
/*Programar una funcion que repita un texto X veces.*/
/*
let repetir=(palabra, repeticiones) => {
    if(!(typeof palabra === 'string' || palabra instanceof String)) return console.error('No se ingreso primero, un string');
    if(isNaN(repeticiones)) return console.error('No se ingreso un numero de segunda');
    return console.log(palabra.repeat(repeticiones));
}
repetir(' BUENAS ', 2);
*/