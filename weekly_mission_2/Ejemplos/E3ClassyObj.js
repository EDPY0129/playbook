//1. Crear una clase vacía
class Object1 {
    //Esta es una clase vacía
}
console.log(Object1)//imprime {}
console.log("\n")

//2. Instanciar objetos de una clase
console.log("Instanciar un objeto a partir de una clase")
class Object {
    propiedad = "propiedad"
} 
var Ob1 = new Object()
console.log(Ob1)
console.log("\n")

//3. Instaciar Objetos con atributos- utilizar un método en el objeto
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
console.log("\n")

//4. Metodos en los objetos
/*
Existen muchos métodos para los objetos, nombraremos pocos con fines ilustrativos. Podemos encontrar algunos en el Ejemplo2 en esta carpeta
*/
const phone= {
    brand: "Xiaomi",
    model: "Redmi 9",
    color: "purple",
    specifications : [Ram="3 gb", Rom="32gb", processor = " Helio G80", sim = "dual sim"]
}
phone['age']='1 year';
console.log(phone)
delete phone.age; //Con este metodo podemos borrar alguna propiedad en específico
console.log(phone)
console.log(phone.hasOwnProperty('model')) // con el metodo hasOwnProperty podemos verificar si un determinado obejto tiene alguna proiedad buscada, esto devuelve true or false según la condicion dada.

//5. Un objeto con valores por default puede ser como el siguiente
const laptop ={
    brand: 'Hewlett Packard',
    model: 'Pavilion 15cw',
    color: 'blue'
}
console.log(laptop)//objeto con propiedades por default
console.log("\n")

//6. Getters y setters. Es una forma de como nosotros podemos controlar el valor de una propiedad para ser modificada. Ejmplo:
const laptop2 ={
    brand: 'Hewlett Packard',
    model: 'Pavilion 15cw',
    color: 'blue',
    RAM_1 : '12Gb', 
    get RAM (){
        return this.RAM_1;
    }, //con este método podemos retornar el valor de una propiedad mediante una función, si bien podemos hacerlo mediante un simple llamado de funcion.

    set RAM(RAM){
        if (RAM === '' || (typeof RAM === 'undefined')) {
            return;
        }
        this.RAM_1 = RAM;
    } // Con el método set podemos actualizar el valor de una propiedad mediante una función, además le añadimos una condicional para controlar el tipo de valor que queremos añadir y así poder evitar posibles errores.
}
laptop2.RAM = '8 Gb'; // lo importante de los getters y setters es que podemos menejar este tipo de métodos/ funciones como si fuese una propiedad del objeto, lo que hace más fácil la sintanxis
console.log(laptop2.RAM)
console.log("\n")

//7. Método static. Este método nos permite acceder a las propiedades del obejto sin la necesidad de instanciar la clase y acceder a el
class Coordenada {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static coordenadaOrigen() { 
      return new Coordenada(0,0);
    }
}
var origen = Coordenada.coordenadaOrigen(); // sin el método statatic tenemos un error al llamar a la función 
console.log(origen)
console.log("\n")

//8. Herencia. Una clase puede heredar las propiedades de una clase superior para ser reutilizada, esto es importante para la eficiencia del código y su modularizacion. Ejemplo: 
class telefono{ // Esta es la clase padre del cual la clase hijo podrá heredar las propiedades del mismo 
    constructor (marca){
        this.marca=marca; 
    }

    mensaje(){
        return "El teléfono es " + this.marca;
    }
}

class Modelo extends telefono{ // con la palabra reservada extends podemos decirle a la clase hijo que tome las propiedades de la clase padre
    constructor (marca, modelo){
        super(marca); //Esta es otra palabra reservada con la cual podemos hacer refencia a que propiedad en específico se tomará de la clase padre
        this.modelo=modelo;
    }
    mensajec(){
        return this.mensaje() + ", el modelo es "+ this.modelo; // acá podemos usar this para hacer referencia a la propiedad de la clase padre, note que no se usó super, pero se puede usar de igual forma, no hay ningún problema
    }
}
var mitelefono = new Modelo ("Xiaomi", "Redmi 12")
console.log(mitelefono.mensajec()); //recordatorio que para acceder a las propiedades del objeto debemos hacer referencia al objeto instanciado
console.log("\n")

//9. Overriding  methods. Lo que entiendo de este método es que se pueden anular las clases padres de javascript, bueno, las clases hijas podrán anular las propiedades del padre o tener propiedades cercanas a ellas, para ello pondré el ejemplo propuesto por el canal Bro Code

//a child class will use methods with the same name that are most closely associated with it.
class Vehicle{

    drive(){
      console.log("You drive the vehicle");
    }
}
  
class Car extends Vehicle{
  
    drive(){
      console.log("You drive the car!");
    }
}
  
class RaceCar extends Car{
  
    drive(){
      console.log("You drive the racecar!!!!!!!");
    }
}
  
let vehicle = new Vehicle();
let car = new Car();
let raceCar = new RaceCar();
  
vehicle.drive();
car.drive();
raceCar.drive();

//como se puede ver las clases hijas heredan las propiedades del padre pero son distintas, muy similares.
//Aún no comprendo del todo este concepto


