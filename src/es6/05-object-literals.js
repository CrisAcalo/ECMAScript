// ENAHCED OBJECTS LITERALS

//(a.ES6)

//función para crear usuario
function newUser(user,age,country,uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}
//Imprimir Usuario
console.log(newUser("gndx",34,"MX",1));


function User(user, age, country, uId) {
    this.user = user;
    this.age = age;
    this.country = country;
    this.id = uId;
}

// Creando una instancia del objeto User
const usuario = new User("gndx", 34, "MX", 1);
console.log(usuario);

// ## 🦄✨
// **Es importante recalcar la diferencia entre las 'Enhanced Object Literals' y un constructor**, ya que a simple vista, ambas son muy similares. Ambas estructuras te permiten crear y retornar un objeto, pero tienen diferencias clave en su implementación y uso.

// Un **constructor** es una función especial diseñada para crear una instancia de un objeto con propiedades y métodos asignados a `this`. Veamos un ejemplo:

// ```javascript
// function User(user, age, country, uId) {
//     this.user = user;
//     this.age = age;
//     this.country = country;
//     this.id = uId;
// }
// ```

// Para crear una nueva instancia utilizando este constructor, usamos el operador `new`:

// ```javascript
// const usuario = new User("gndx", 34, "MX", 1);
// console.log(usuario);
// ```

// La ventaja del constructor es que te permite tener una especie de "plantilla" para crear múltiples objetos con la misma estructura. A diferencia de los "Enhanced Object Literals" que siempre retornarán un objeto literal. Además, puedes incorporar métodos y características compartidas a través del prototipo del constructor.
