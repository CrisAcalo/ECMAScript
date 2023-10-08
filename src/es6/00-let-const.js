//LET
//Declarar y asignar
var lastName = 'Cris';
//Reasignar
lastName = 'José';
console.log(lastName);
//let nos permite reasignar

let fruit = 'apple';
fruit = 'kiwi';
console.log(fruit);
//var tambiénnos permite reasignar

const animal = 'dog';
animal = 'cat';
console.log(animal);
//const no nos permite reasignar valores, es una constante


//SCOPE
const fruits = () => {
    if(true){
        var fruit1 = 'apple'; //function scope: Tiene un alcance global
        let fruit2 = 'kiwi'; //Block scope: Solo puede ser llamada en el bloque de código donde se encuentra
        const frui3 = 'banana'; //Block scope
    }
    console.log(fruit1);
    console.log(fruit2); //Error
    console.log(fruit3); //Error
}

fruits();

