//Ejercicio 15
//programar una funcion para convertir numeros de base binaria a decimal y viceversa

const conversionBases = (numero = undefined, base = undefined) =>{
    if(numero === undefined) return console.warn('Noo se digito un numero');
    if(base === undefined) return console.warn('No se digito la base');
    if(isNaN(numero)) return console.error('No se ingreso un numero');
    if(isNaN(base)) return console.error('No se ingreso un numero de base');
    return (base === 2)
        ? console.log(`El numero ${numero} en base 2, en base 10 seria: ${parseInt(numero,base)}`)
        : console.log(`El numero ${numero} en base 10, en base 2 seria: ${numero.toString(2)}`)
}

conversionBases(1010,2)

//Ejercicio 16
//Programar una funcion que devuelve el monto final despues de aplicar un descuento a una cantidad dada
const descuento = (precio = undefined, porcentaje = undefined) => {
    if(precio === undefined) return console.warn('Noo se digito el precio');
    if(porcentaje === undefined) return console.warn('No se digito el porcentaje');
    if(isNaN(precio)) return console.error('No se ingreso un precio');
    if(isNaN(porcentaje)) return console.error('No se ingreso un numero de porcentaje');
    if(porcentaje > 100) return console.error('No puede haber un descuento mayor a 100%');
    return console.log(`El precio con descuento quedaria en: ${Math.floor(precio*((100-porcentaje)/100))}`)
}
descuento(1000,20)


//Ejercicio 17
//Programar una funcion que dada una fecha valida determine cuantos años han pasado hasta el dia de hoy
const calcularAnios = (fecha = undefined) =>{
    if(fecha === undefined) return console.warn('No se digito una fecha')
    if(!(fecha instanceof Date)) return console.error('El valor que ingresaste no es una fecha valida')
    
    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMs = 1000 * 60 *60 *24 *365,
    aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMs);
    
    const bool = Math.sign(aniosHumanos);
    console.log(bool);
    switch (bool) {
        case 1: return console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
        case 0: return console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
        case -1: return console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    }
}
calcularAnios(new Date(233,1,9));
