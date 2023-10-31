//Class declaration
class User {

}

//Class instance
//const newUser = new User();

class user {
    //metodos 
    greeting(){
        return 'Hello';
    }
}

const newUser =  new user();
console.log(newUser.greeting());


//constructor, this is the first function excecuted when a class is called
class user {
    constructor(name){
        this.name = name;
    }

    greeting(){
        return `Hello ${this.name}`;
    }
}

const cris = new user('Cris');
console.log(cris.greeting());


//Setters and getters

class user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        return `Hello ${this.name}, you have ${this.age} years old.`;
    }

    set uAge(n){
        this.age = n;
    }

    get uAge(){
        return this.age;
    }
}

const  user2 = new user('Cris',20);
console.log(user2.greeting());
user2.uAge = 21;
console.log(user2.greeting());
