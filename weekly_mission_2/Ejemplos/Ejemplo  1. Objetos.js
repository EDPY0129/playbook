// Creacion de un objeto vacio 
const MyObject = {
    // no tiene ningún atributo
}
console.log(MyObject)// Devuelve {}      

// Creacion de un Objeto con propiedades
const casa = {
    color: "Púrpura",
    NoPisos: "3 Pisos",
    Jardin: "Si",
    Ubicacion: "Iztapalapa"
}

console.log(`Mi casa tiene las siguientes propiedades:`)
console.log(casa)// imprimimos las propiedades de la casa

//objeto con propiedades diferentes, un poco mas complejo
const phone= {
    brand: "Xiaomi",
    model: "Redmi 9",
    color: "purple",
    specifications : [Ram="3 gb", Rom="32gb", processor = " Helio G80", sim = "dual sim"]
}

console.log(phone)
console.log(phone.specifications[1])
console.log('\n')

// creación de un objetos con con métodos
class Object {

} 
var Ob1 = new Object()
console.log("Creación de un objeto vacío")
console.log(Ob1)
console.log('\n')

// creación de un objetos con con métodos 
class libro {
    constructor (name, autor, gender, year){
        this.name=name
        this.autor = autor
        this.gender = gender
        this.year = year
    }
}

var libro1 = new libro("Mi negro pasado", "Laura Esquivel", "Realismo magico", "2000")
console.log(libro1)

var libro2 = new libro("Mitologia griega: cuna de occidente", "Javier Tapia", "Mitología", "2021")
console.log(libro2)
