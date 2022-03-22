//Ejercicio 21
//Programar una funcion que dada un array numerico devuelva otro array con los elevados al cuadrado
const elevarArr = (arr=undefined) =>{
    if(arr === undefined) return console.warn('No se digito el arreglo')
    if(!(arr instanceof Array)) return console.error('No se ingreso una instancia de arreglo')
    let arrReturn = []
    for (const elemento of arr) {
        if(isNaN(elemento)) return console.error('No es un arreglo de numerico')
        arrReturn.push(elemento*elemento)
    }

    //const newArr = arr.map(el => el * el)

    return console.info(arrReturn)
}

elevarArr([2,[1,2],4])

//Ejercicio 22
//Programar una funcion que dada un array devuelva el numero mas alto y el mas alto y el mas bajo del array
const minMax= (arr=undefined) =>{
    if(arr === undefined) return console.warn('No se digito el arreglo')
    if(!(arr instanceof Array)) return console.error('No se ingreso una instancia de arreglo')
    let minimo = arr[0], maximo=arr[0]
    for (const elemento of arr) {
        if(isNaN(elemento)) return console.error('No es un arreglo de numerico')
        if(minimo >elemento) minimo=elemento;
        if(maximo<elemento) maximo = elemento;
    }
    //Math.max(arr)  Math.min(arr)
    return console.log(arr, maximo,minimo)
}

minMax([1,2,3])

//Ejercicio 23
//Programar una funcion que dado un array de numero devuelva un objeto con 2 arreglos en el primero almacena los numeros pares y en el segundo los impares
const parImpar = (arr=undefined) =>{
    if(arr === undefined) return console.warn('No se digito el arreglo')
    if(!(arr instanceof Array)) return console.error('No se ingreso una instancia de arreglo') 
    let par = [], impar = []
    for (const elemento of arr) {
        if(isNaN(elemento)) return console.error('No es un arreglo de numerico')
        (elemento % 2 === 0) ? par.push(elemento) : impar.push(elemento)
    }
    // pares: arr.filter(num => num%2 === 0)  impares: arr.filter(num => num%2 === 1)
    return console.log({par,impar})
}

parImpar([1,2,3,4,5])

