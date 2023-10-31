//EXPRESIONES DE ASIGNACIÓN
//arrays destructuring

let fruits = ["apple", "banana"];
let [a, b] = fruits; //asignando appel y banana a las variables a y b

console.log(a, fruits[1]);

//Object destructuring

let user = { username: "Cris", age: 20 };
let { username, age } = user; //Almacenando los valores del objeto en otras variables
console.log(username, user.age);

// Destructuring for-of loop

const arr = ["a", "b", "c", "d"];
for (const [index, element] of arr.entries()) {
  console.log(index, element);
}

// SPREAD OPERATOR
// Spread syntax: desestructura -> deconstruye
let person = { name: "Cris", age: 20 };
let country = "Ec";

let data = { id: 1, ...person, country };

console.log(data);

// REST
// Rest syntax: empaqueta -> construye

// Ojo, el parámetro rest siempre deberá estar en la
// última posición de los parámetros de la función
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

console.log(sum(1, 1, 2, 3, 4, 5, 6, 7, 8, 9));

//Ejemplo práctico:
let kissEmoji = [..."👩‍❤️‍💋‍👩"];
console.log(kissEmoji);

let familyEmoji = [..."👨‍👩‍👦‍👦"];
console.log(familyEmoji);

function solution(
  json1 = {
    name: "Mr. Michi",
    food: "Pescado",
  },
  json2 = {
    age: 12,
    color: "Blanco",
  }
) {
  return { ...json1, ...json2 };
}