class UserView{
     
    static createUser(payload){
        if (payload == null){
            return {error : "payload no existe"}
            //retornando un objeto con key error y value "payload no existe"
        }else{
            console.log("OK");
        }
    }
}

module.exports = UserView;