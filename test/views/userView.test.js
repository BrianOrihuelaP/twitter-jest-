const UserView = require("./../../app/views/UserView")

describe("Suite de pruebas #2 - Probando vistas", () => {
    
    test('Requerimiento 1 : Retornar un error de objeto cuando se inente crear un usuario con un payload nulo', () => {
       //Escribimos el codigo que queremos usar tal cual
      const payload = null
      const result = UserView.createUser(payload)   
      //se hacen las pruebas para verificar si nuestro servicio funciona de la manera correcta
      //https://jestjs.io/docs/using-matchers#strings
      expect(result.error).toMatch(/payload no existe/);
    })

  })