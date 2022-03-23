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

//ordenamiento([1,2,5,3,8])

//Ejercicio 25
//Programar una funcion que dado un arreglo de elementos, elimine los duplicados
const quitarRepetidos = (arr = undefined) => {
    if(arr === undefined) return console.warn('No se didgito el arreglo numerico');
    if(!(arr instanceof Array)) return console.error('No se ingreso una instancia de objeto');
    if(arr.length === 0) return console.warn('Se ingreso un arreglo vacio')
    if(arr.length === 1) return console.warn('El arreglo almenos debe tener dos elementos')
    /* return console.info({
        original: arr,
        sinDuplicados: arr.filter((value, index, self) => self.indexOf(value)=== index)
    }) */
    return console.info({
        original: arr,
        sinDuplicados: [... new Set(arr)]
    }) 
}

//quitarRepetidos([1,2,2,3])

//Ejercicio 26
//Programar una funcion que dado un arreglo de numeros obtenga el promedio
const arrPromedio = (arr)=>{
    if(arr === undefined) return console.warn('No se didgito el arreglo numerico');
    if(!(arr instanceof Array)) return console.error('No se ingreso una instancia de objeto');
    if(arr.length === 0) return console.warn('Se ingreso un arreglo vacio')
    if(arr.length === 1) return console.warn('El arreglo almenos debe tener dos elementos');
    return console.info(
        arr.reduce((total, num, index, arr) =>{
            total+=num
            if( index === arr.length-1 ){
                return `El promedio de ${arr.join(' + ')} es igual a ${total / arr.length}`
            }else{ return total}
        })
    )
}

arrPromedio([1,2,3])