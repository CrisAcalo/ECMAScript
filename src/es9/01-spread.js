//Rest Operator

const user = { username: "cris", age: 21, country: "EC" };

const { username, ...values } = user;
console.log(user);
console.log(values);

//El operador de propagación sirve para crear una copia en un solo nivel de profundidad,
//esto quiere decir que si existen objetos o arrays dentro de un objeto a copiar.
//Entonces los sub-elementos en cada nivel, tendrán la misma referencia en la copia y en el original.

//serialización y deserialización de JSON.

const person = {
  name: "Cris",
  age: 21,
  address: {
    city: "Ciudad Gótica",
    calle: "Av. Siempre Viva",
  },
};

const personJSON = JSON.stringify(person);
const personCopy = JSON.parse(personJSON);

console.log(person); //person Object
console.log(personCopy); //mismos datos exactos de person Object
console.log(person == personCopy); // False porque no tienen la misma dirección de memoria
