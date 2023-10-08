//ARROW FUNCTIONS

//función normal
function square(num){
    return num * num;
}

//Las arrow functions se pueden usar con var, let o const
//pero es recomendable hacerlas con const.
//ES5
const square = (num) => {
    return num * num;
}

//Si tenemos un solo argumento, se pueden omitir los paréntesis y los handle bars
//ES6
const square = num => num * num;

console.log(square(4));