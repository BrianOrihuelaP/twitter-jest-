const user = require("../models/User")
//se importa la clase user
class userService{
    //se cra la clase que hara el servicio
    static create(id,userName,name){
        //creamos un metodo estatico lo cual quiere decir que no se necesita que un objeto de la clase se cree
        return new user(id,userName,name,"Sin Bio")
        //retornamos un nuebo objeto de la clase usuario con los parametros del metodo estatico con la bio por defecto
    }
}

module.exports = userService