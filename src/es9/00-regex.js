//ES9

//Expresiones regulares

const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2023-11-04");
console.table(matchers);