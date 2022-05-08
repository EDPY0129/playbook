
// 1.For each. Este metodo ejecuta la funcion indicada por cada elemento del arreglo. Es como un for pero mas compacto
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

function logArrayElements(element, index) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 7, 9].forEach(logArrayElements);
console.log("\n")

// salida:
// a[0] = 2
// a[1] = 5
// a[3] = 7
// a[4] = 9

// 2. Map. Este método itera por cada uno de los elementos del arrelgo para crear un nuveo areglo producto de la funcion dada. Ejemplos:

var numbers = [1, 5, 10, 15]; // Arreglo principal
var doubles = numbers.map(function(x) {
   return x * 2; 
});
console.log(doubles)// El arreglo es ahora [2, 10, 20, 30]
console.log(numbers)// Los numeros del arreglo principal siguen siendo [1, 5, 10, 15]

console.log("\n")

var numbers2 = [1, 4, 9]; // Arreglo principal
var roots = numbers2.map(function(num2) {
    return Math.sqrt(num2);
});
console.log(roots)// Las raíces son ahora [1, 2, 3]
console.log(numbers2)// Los numeros del arreglo principal siguen siendo [1, 2, 3]
console.log("\n")

// 3. Filter crea un nuevo arreglo iterando sobre cada elemento del arreglo original, pero con la excepción de que solo se añadiran aquellos que cumplan determinada condición puesta. Ejemplo:
const words = ['VSCode', 'JavaScript', 'NodeJS', 'LaunchX', 'MissionComander', 'Woopa'];

const result = words.filter(word => word.length > 6);

console.log(result); // El resultado esperado es: [JavaScript, LaunchX, MissionComander]
console.log("\n")

//4. Array. Este método reduce todos lo valores de un arreglo a un unico valor (Ver aún si se puede hacer con String). Ejemplo: 

const array4 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 3;
const sumWithInitial = array4.reduce(
  (ValorPrevio, ValorActual) => ValorPrevio + ValorActual, initialValue // El valor inical es importante porque si el arreglo está vacio, al agregarle el método reduce, arroja TypeError
);

console.log(sumWithInitial) // devuelve 13
console.log("\n")

//5. Every. Determina si -TODOS- los valores de un arreglo cumplen una condición, pero si el arreglo está vacío siempre arrojará True. Ejemplo: 
const esMenorQue = (ValorActual) => ValorActual < 40;

const array5 = [1, 30, 39, 29, 10, 13];

console.log(array5.every(esMenorQue)); //Arroja True
console.log("\n")

//6. Find. Este método nos devuelve solamente el valor del primer elemento del arreglo que cumple la condición dada. Ejemplo: 
const array6 = [5, 12, 8, 130, 44];

const buscar = array6.find(elemento => elemento > 10);

console.log(buscar);// Devuelve 12. En caso de false, devuelve Undefined
console.log("\n")

//7. FindIndex. Es como Find, pero devuelve el índice del primer elemento que cumple la condición dada. En caso de false, devuelve -1. Ejemplo:
const array7 = [5, 12, 8, 130, 44];

const valor = (elemento) => elemento > 13;

console.log(array7.findIndex(valor));// devuelve 3, que corresponde a 130
console.log("\n")

//8. Some. Este método prueba si hay por lo menos un elemento del arreglo que cumple la condición dada. Si el arreglo está vacio devueve false. Ejemplo: 
const array8 = [1, 2, 3, 4, 5];

const funcionCondicion = (elemento) => elemento % 2 === 0; //Esta funcion comprueba si hay algun elemento par

console.log(array8.some(funcionCondicion)); //Devuelve true
console.log("\n")

//9. Sort. Este método ordena los elementos de un arreglo devolviendo este orden en otro arreglo, es importante destacar que el ordenamiento es de acuerdo a unicode, en donde la reglas de ordenamiento que conocemos no aplican en todos lo casos, para ilustrar esto tenemos los siguientes ejemplos: 

var frutas = ['guindas', 'manzanas', 'bananas'];
console.log(frutas.sort()); // ['bananas', 'guindas', 'manzanas']
console.log("\n")

var puntos = [1, 10, 2, 21];
console.log(puntos.sort()); // Devuelve [1, 10, 2, 21] porque 10 viene antes que 2 porque '10' viene antes que '2' según la posición del valor Unicode.
console.log("\n")

var cosas = ['word', 'Word', '1 Word', '2 Words'];
console.log(cosas.sort()); // Devuelve ['1 Word', '2 Words', 'Word', 'word'] En Unicode los números vienen antes que las letras mayúsculas y estas vienen antes que las letras minúsculas.
console.log("\n")

var numbers = [4, 2, 5, 1, 3]; //Uso de sort para ordenar una cadena, apoyándonos de un función de comparación
numbers.sort(function(a, b) {
  return a - b; //Comparación de números
});
console.log(numbers);



