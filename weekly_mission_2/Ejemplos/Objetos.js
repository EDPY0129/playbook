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