//Set y add
const list = new Set();

list.add("Item 1");
list.add("Item 2");
//Set no permite agregar elementos repetidos
list.add("Item 2");

console.log(list);

let i = 0;
for (let element of list) {
  if (i == 0) {
    console.log(`[${i}] = ${element}`);
    i++;
  }
}

const arrayFromSet = [...list];
console.log(arrayFromSet[0]); // Accede al primer elemento