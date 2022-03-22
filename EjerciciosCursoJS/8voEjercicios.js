//Ejercicio 24
//Programa una funcion que dado un arreglo de numeros devuelva un objeto con dos arreglos, el primero tendra los numeros ordenados en forma ascendente y el segundo de forma descendente
const ordenamiento = (arr = undefined) =>{
    if(arr === undefined) return console.warn('No se didgito el arreglo numerico');
    if(!(arr instanceof Array)) return console.error('No se ingreso una instancia de objeto');
    if(arr.length === 0) return console.warn('Se ingreso un arreglo vacio')
    for (const element of arr) {
        if(isNaN(element)) return console.error('No es un arreglo de enteros')
    }
    


    return console.info({
        arr,
        asc:arr.map(el=>el).sort(),
        dsc:arr.map(el=>el).sort().reverse(),
    })
}

ordenamiento([1,2,5,3,8])