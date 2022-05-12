const userService = require("./../../app/services/userServices")
class UserView{
     
    static createUser(payload){
        //creando el metodo estaticp
        if (payload == null){
            return {error : "payload no existe"}  
            //retornando un objeto con key error y value "payload no existe"
        }else 
        //typeof da como resultado una cadena con el tipo de variable = 'string', 'number'
            if((typeof payload.name != 'string') || (typeof payload.username != 'string' )|| (typeof payload.id != 'number')){
                //con ayuda del typeof comparamos el tipo de variable 
                return {error : `Se necesitan valores validos => name: "TU NOMBRE" ; username: "Tu nombre de usuario" ; id: "Tu ID"`}
                //si no se cumplen las validaciones entonces retornamos un objeto con un mensaje de error
            }else{
            return userService.create(payload.id,payload.username,payload.name)
            //si el payload esta correcto entonces mandamos a llamar el servicio de creacion de usuarios
        }
    }
}

module.exports = UserView;