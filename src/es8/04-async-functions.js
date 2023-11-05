//Async Functions
const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async!!"), 2000)
      : reject(new Error("Error!"));
  });
};

const anotherFunction = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("In AnotherFunction");
};

console.log("Before");
anotherFunction(); //No se bloquea la ejecucion del programa, sino que se ejecuta normalmente mientras anotherFunction() sigue en ejecucion
console.log("After");