class user{
    constructor(id,username,name,bio){
        this.id = id
        this.username = username 
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date() 
        //este constructor llama a la clase DATE la cual toma la fecha y hora del S.O
    }

    get getName(){
        return this.name;
    }

    get getId(){
        return this.id;
    }

    get getUsername(){
        return this.username;
    }

    set setUsername(username){
        this.username = username;
    }

    get getBio(){
        return this.bio;
    }

    set setBio(bio){
        this.bio = bio;
    }

    get getdateCreated(){
        return this.dateCreated;
    }

    get getLastUpdate(){
        return this.lastUpdate;
    }
}

module.exports = user;