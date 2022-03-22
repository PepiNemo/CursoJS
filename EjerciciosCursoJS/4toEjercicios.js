//Ejercicio 12
//Programar una funcion que determine si un numero es primo (aquel que solo es divisible por si mismo y 1)
const primo = (number=undefined) =>{
    if(number=== undefined) return console.error('No se ingreso nada')
    if(isNaN(number)) return console.error('No se ingreso un numero')
    if(number === 0) return console.error('El numero no puede ser 0')
    if(number === 1) return console.error('El numero no puede ser 1')
    let divisible = false
    for(let i=2 ; i<number; i++){
        if((number %i) === 0){
            divisible = true
            break
        }
    }
    
    (divisible)
        ? console.log(`El numero ${number} no es primo`)
        : console.log(`El numero ${number} es primo`)
}
primo(7)
primo(10)

//Ejercicio 13
// Programar una funcion que determine si un numero es par o impar 
const par = (number= undefined) => {
    if(number=== undefined) return console.error('No se ingreso nada')
    if(isNaN(number)) return console.error('No se ingreso un numero')
    if(number === 0) return console.error('El numero no puede ser 0')
    return (number % 2 ===0)
        ? console.log(`El numero ${number} es par`)
        : console.log(`El numero ${number} es impar`)
}

par(3)
par(4)

//Ejercicio 14
//programar una funcion para convertir  grados Celsius a Farrenheit y viceversa 
const conversion = (number=undefined, grado=undefined)=>{
    if(grado === 'C') return console.log(`En fahrenheit seria : ${number+32}°F` )
    if(grado ==='F')return console.log(`En Celsius seria : ${number-32}°C` )
}

conversion(32,'C')
