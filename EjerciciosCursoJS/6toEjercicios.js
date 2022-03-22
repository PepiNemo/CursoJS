//Ejercicios 18
//Programar una funcion que dada una cadena de texto cuente el numero de vocales y consonantes
const contarLetras = (cadena ='') =>{
    if(!cadena) return console.warn('No se digitalizo una cadena');
    if(typeof cadena !== 'string') return console.error('No se ingreso una tipo de cadena')
    
    cadena = cadena.toLowerCase();
    let vocales=0, consonantes=0;
    for (const letra of cadena) {
        if(/[aeiouáéíúó]/.test(letra)){vocales++}
        if(/[bcdfghjklmnñspqrstvwxyz]/.test(letra)){consonantes++}
    }

    return console.log({cadena, vocales, consonantes})
}

contarLetras('Hola mundito')

//Ejercicio 19
//Programar una funcion que valide que un texto sea un nombre valido
const validarNombre = (nombre = '') =>{
    if(!nombre) return console.warn('No se digitalizo un nombre');
    if(typeof nombre !== 'string') return console.error('No se ingreso una tipo de String')
    let expReg = /^[A-Za-zÑÁÉÍÓÚñáéíóú\s]+$/g.test(nombre);
    return (expReg)
        ? console.info(`'${nombre}', es un nombre valido`)
        : console.info(`'${nombre}', NO es un nombre valido`)
}

validarNombre('Felipe Ulloa')

//Ejercicio 20
//Programar una funcion que valide que un texto sea un email valido
const validarEmail = (email = '') =>{
    if(!email) return console.warn('No se digitalizo un email');
    if(typeof email !== 'string') return console.error('No se ingreso una tipo de String')
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return (expReg)
        ? console.info(`'${email}', es un email valido`)
        : console.info(`'${email}', NO es un email valido`)
}

validarEmail('Felipe Ulloa')
validarEmail('pipito@correo.nose')