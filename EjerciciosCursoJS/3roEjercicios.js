//Ejercicio 9
/*Progamar una funcion que obtenga un numero numero aleatorio entre 501 y 600.*/
const numAleatorio = (min, max) => console.log(Math.floor(Math.random() * (max-min) +min));
numAleatorio(501,600)

//Ejercicio 10
/*Programar una funcion que reciba un numero y evalue si es capicua o no
(que se lee igual en un sentido que en otro)*/
const capicuo = (numero) => {
    if(isNaN(numero)) return console.error('No se  ingreso un numero');
    numero = numero.toString()
    let reverse = numero.split('').reverse().join('');
    (numero === reverse) 
        ? console.info(`Si es capicua Numero original ${numero}, Numero al reves ${reverse}`)
        : console.info(`No es capicua Numero original ${numero}, Numero al reves ${reverse}`)
}

capicuo(202)
capicuo(2000)
//capicuo(123)

//Ejercicio 11
/*Programar una funcion que calcule el factorial de un numero */
const factorial = (number) => {
    for(let i=number-1; i>1; i--){
        number *= i;
    }
    return console.log(number);
}
factorial(5)