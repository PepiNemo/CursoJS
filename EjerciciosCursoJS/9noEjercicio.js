/* La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.
    * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
class Pelicula{
    constructor({imbd, titulo, director}){
        this.id=imbd
        this.titulo=titulo
        this.director=director
        this.validateIMBD('IMBD', this.id)
        this.validateTituloDirector('Titulo', this.titulo, 100);
        this.validateTituloDirector('Director', this.director, 50);
    }

    isString(atributo, valor){
        if(typeof valor !=='string' | valor==''){
            return console.error(`El atributo ${atributo}, no es un String`);
        }
        return true;
    }

    isLengthLessThan(atributo, valor, longitud){
        if(atributo.length > longitud){
            return console.warn('La longitud del atributo ${}  ')
        }
        return true
    }

    validateIMBD(atributo, valor){
        if(this.isString(atributo, valor)){
            if(!(/^[a-z]{2}[0-9]{7}$/.test(valor))){
                return console.warn(`El atributo ${atributo}, no cumple con la estructura de los primeros 2 sean letras y los 
                7 restantes números.`)
            }
        }
    }

    validateTituloDirector(atributo, valor, longitud){
        this.isString(atributo, valor);
        this.isLengthLessThan(atributo, valor, longitud);
    }

}

let nose = new Pelicula({imbd:'tt1234567'})