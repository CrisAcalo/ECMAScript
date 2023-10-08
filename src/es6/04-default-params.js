//PARAMETROS POR DEFECTO

//(a.EC6)
function newUser(name, age, country){
    var name = name || 'Cris';
    var age = age || '20';
    var country = country || 'Ec';
    console.log(`${name} with ${age} years old, from ${country}`);
}

newUser();
newUser('Pedro',40,'Col');

//(d.EC6)
function newAdmin(name = 'Cris', age = 20, country = 'Ec'){
    console.log(`${name} with ${age} years old, from ${country}`);
}

newAdmin();
newAdmin('Juan',22,'Pe');