const user = require("../models/User")
//se importa la clase user
class userService{
    //se cra la clase que hara el servicio
    static create(id,userName,name){
        //creamos un metodo estatico lo cual quiere decir que no se necesita que un objeto de la clase se cree
        return new user(id,userName,name,"Sin Bio")
        //retornamos un nuebo objeto de la clase usuario con los parametros del metodo estatico con la bio por defecto
    }

    static getInfo(user){
        const userInfo = Object.values(user) 
        //esta funcion me regresa un array con solo los values del objeto
        return userInfo
        //retorno la constante la cual sera capturada por la constante que hace la petición a la función
    }

    static updateUserUsername(user,username){
        user.setUsername = username
        //como bien sabemos, el metodo creado en la clase set, puede actualizar  los atributos que contengan algun set
    }

    static getAllUsernames(lista){
        //creamos un objeto que contendra el resultado de map
        const listaUserNames = lista.map(
            //map mapea toda la informacion contenida en lista
            (lista) => lista.username
            //aqui delimita los campos y solo mapeara lo mencionado, en este caso de la lista solo mapea los username
            )
            //por ultimo retorname la lista y se guardara en donde se hizo la peticion
            return listaUserNames
    }
}

module.exports = userService