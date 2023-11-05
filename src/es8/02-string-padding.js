//Pad
const string = "xD";

console.log(string.padStart(8, "hi"));
console.log(string.padEnd(8, "hi"));

//Example
const names = ["Alice", "Bob", "Charlie", "Dave"];
const maxLength = names.reduce((max, name) => Math.max(max, name.length), 0);

names.forEach((name) => {
  console.log(name.padStart(maxLength, " "));
});
