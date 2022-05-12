const userService = require("./../../app/services/userServices")
class UserView{
     
    static createUser(payload){
        if (payload == null){
            return {error : "payload no existe"}  //retornando un objeto con key error y value "payload no existe"
        }else 
            if((typeof payload.name != 'string') || (typeof payload.username != 'string' )|| (typeof payload.id != 'number')){
                return {error : `Se necesitan valores validos => name: "TU NOMBRE" ; username: "Tu nombre de usuario" ; id: "Tu ID"`}
        }else{
            return userService.create(payload.id,payload.username,payload.name)
            
        }
    }
}

module.exports = UserView;