const UserView = require("./../../app/views/UserView")

describe("Suite de pruebas #2 - Probando vistas", () => {
    
    test('Requerimiento 1 : Retornar un key-error (objeto) cuando se inente crear un usuario con un payload nulo', () => {
       //Escribimos el codigo que queremos usar tal cual
      const payload = null
      const result = UserView.createUser(payload)   
      //se hacen las pruebas para verificar si nuestro servicio funciona de la manera correcta
      //https://jestjs.io/docs/using-matchers#strings
      expect(result.error).toMatch(/no/);
      //.toMatch = compara cadenas a partir de un predicado y si la cadena contiene lo del predicado pasa la prueba
    })

    test('Requerimiento 2 & 3 : Retornar un key-error (objeto) cuando se inente crear un usuario con un payload invalido (null o tipo erroneo)', () => {
        //Escribimos el codigo que queremos usar tal cual
       const payload = {username:null, name:12, id:"id"}

        //const payload = {username:"uli", name:null, id:null} la prueba pasa 
        //const payload = {username:"uli", name:null, id:12} la prueba pasa 
        //const payload = {username:"uli", name:null, id:"id"} la prueba pasa 
        //const payload = {username:null, name:12, id:"id"} la prueba pasa 
        //const payload = {username:null, name:null, id:null} la prueba pasa 
        //const payload = {username:"uli", name:"Ulises", id:1} la prueba falla dado que es el funcionamiento ideal

       const result = UserView.createUser(payload)   
       expect(result.error).toMatch(/Se necesitan valores validos => name: "TU NOMBRE" ; username: "Tu nombre de usuario" ; id: "Tu ID"/);
       //.toMatch = compara cadenas a partir de un predicado y si la cadena contiene lo del predicado pasa la prueba
     })

     test('Requerimiento 4 : Crear usuario con un payload valido', () => {
        //Escribimos el codigo que queremos usar tal cual
       const payload = {username:"uli-hacker", name:"Ulises", id:1}
       const result = UserView.createUser(payload)   
       //se hacen las pruebas para verificar si nuestro servicio funciona de la manera correcta
       expect(result.name).toBe("Ulises");
       expect(result.username).toBe("uli-hacker");
       expect(result.id).toBe(1)
     })

  })