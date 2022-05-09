// El objetivo de este ejercicio es  usar los métodos vistos en los ejemplos, for each, map, every, etc. segun lo que se pida, se trabajará con el siguiente areglo que contiene objetos. 
const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

//1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach(Element => console.log(Element.name) )
console.log("---------------")

//2. Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach(Element => console.log(Element.stack) )
console.log("---------------")

// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log(explorers.map(Element => Element.stack))
console.log("---------------")

//4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
let newA = explorers.filter(Element => Element.stack.includes("js")) // aquí se valida que elementos del objeto tiene la palabra Js en la propiedad stack, esto se guarada en un nuevo arreglo
let newAr = []
for (i=0; i < newA.length ; i++){
        newAr.push(newA[i].name)
}// en este ciclo iteramos para cada elemento que incluye js en la propiedad stack, con ello obtenemos el nombre del explorer y lo incluimos en un arreglo vacío previamente definido
console.log(newAr)
console.log("---------------")

//5. Busca el primer explorer que sea de la CDMX, usa FIND
const buscar = explorers.find(elemento => elemento.city == "CDMX")
let newAr2 = [buscar.name]
console.log(newAr2)
console.log("---------------")

//6. Obtén la suma de todos los exercises_completed, usa REDUCE
let newAr3 = []
for (i=0; i < explorers.length ; i++){
        newAr3.push(explorers[i].exercises_completed)
}// en esta parte iteramos para cada elemento y formamos una nuevo arreglo que solo tenga los valores de exercises_completed, con reduce los sumaremos
console.log(newAr3)
const valorinicial = 0;
const suma = newAr3.reduce(
  (ValorPrevio, ValorActual) => ValorPrevio + ValorActual, valorinicial // El valor inical es importante porque si el arreglo está vacio, al agregarle el método reduce, arroja TypeError
);
console.log(suma) // devuelve 22
console.log("---------------")

//7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const funcionCondicion = (exF) => exF == true; //Esta funcion comprueba si hay algun true
let newAr4 = []
for (i=0; i < explorers.length ; i++){
        newAr4.push(explorers[i].missions.onboarding.exercisesFinished)
} //aquí cremaos un arreglo con los booleanos de  exercisesFinished
console.log(newAr4)
console.log(newAr4.some(funcionCondicion)); //Devuelve true porque hay alemnos un valor que es verdadero
console.log("---------------")

// 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const cond = (elemento) => elemento == "true"
console.log(newAr4.every(cond)) // En este ejecicio retomamos la lista creada para los booleanos. Se retorna false porque hay un valor falso en el arreglo definido
