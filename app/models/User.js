class user{
    constructor(id,username,name,bio,dateCreated,lastUpdate){
        this.id = id
        this.username = username 
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date() 
        //este constructor llama a la clase DATE la cual toma la fecha y hora del S.O
    }
}

module.exports = user;