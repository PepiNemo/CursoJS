//Ejercicio 1
/*Programar una funcion que cuente el numero de caracteres
de una cadena de texto, ej: mifuncion('Hola mundo'), return 10
*/

let objeto={
    nombre:'felipito'
}

let variable = [];
console.log(isString(variable));

function isString(variable){
    if(typeof variable === 'string' || variable instanceof String){
        return variable.length;
    }else{
        return 'La variable no es un string';
    }
}


//Ejercicio 2
/*Programar una funcion que te devuelva el texto recortado
segun el numero de caracteres indicados.*/

let cadena = 'Holiwis, pelmazo';
const number = 'hola';
console.log(cortarString(cadena, number));

function cortarString(cadena, number){
    if(isNaN(number))return 'el indice no es un numero';
    if(isString(cadena)){
        if(cadena.length<number)return 'El indice de corte supera la longitud de la cadena'
        return cadena.slice(0,number);
    }else return 'No es una cadena';
}



//Ejercicio 3
/*Programa una funcion que dado un String, te devuelva un Array de textos
separados pr cierto caracter.*/
let palabra='Hola panita moncho';
let caracter=' ';
console.log(separarString(palabra));
function separarString(string){
    try{
        return string.split(caracter);
    }catch(e){
        return e;
    }
};

//Ejercicio 4
/*Programar una funcion que repita un texto X veces.*/
let chorus = ' Because I\'m happy ';
const repeticiones=3;
console.log(repeat(chorus,repeticiones))
function repeat(chorus,repeticiones){
    if(isString(chorus)){
        if(isNaN(repeticiones))return 'No es un numero';
        return (`Chorus lyrics for 'Happy': ${chorus.repeat(repeticiones)}`);
    }return 'No es un String'
}

