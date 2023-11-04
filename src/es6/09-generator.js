function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate([1, 2, 3, 4, 5]);
console.log(it.next().value);

function* naturalNumbers() {
  let num = 1;
  while (true) {
    yield num;
    num++;
  }
}

const numbers = naturalNumbers();
console.log(numbers.next().value); // Imprime 1
console.log(numbers.next().value); // Imprime 2
console.log(numbers.next().value); // Imprime 3

const longitud = 2; // Puedes ajustar la longitud de la cadena según tus necesidades
const cadenaAleatoria = [...Array(longitud)]
  .map(() => (Math.random() + 1).toString(36).substring(2))
  .join("");

console.log(cadenaAleatoria);

let ids = [];
function* getId() {
  while (true) {
    let idGenerated = [...Array(1)]
      .map(() => (Math.random() + 1).toString(36).substring(2))
      .join("");
    if (!ids.includes(idGenerated)) {
      ids.push(idGenerated);
      yield idGenerated;
    }
  }
}

let generateId = getId();

console.log(generateId.next().value);
console.log(generateId.next().value);
console.log(generateId.next().value);
console.log(generateId.next().value);
