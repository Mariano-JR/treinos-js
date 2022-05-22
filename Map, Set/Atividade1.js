function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Stephanie', 'Admin');
usuarios.set('João', 'User');
usuarios.set('Mariano', 'Admin');

console.log(getAdmins(usuarios));