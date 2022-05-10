const User = require("./../../app/models/User")

describe("Suite de pruebas #1", () => {
    test('Requerimiento 1 : Creacion del modelo User', () => {
       //Escribimos el codigo que queremos usar tal cual
      const newUser = new User(1829333,"BrianOrihuelaP","Brian","Engineer")
      expect(newUser.id).toBe(1829333);
      expect(newUser.username).toBe("BrianOrihuelaP");
      expect(newUser.name).toBe("Brian");
      expect(newUser.bio).toBe("Engineer");
    });

    test('Requerimiento 2 : Datos de tipo fecha (user) ', () => {
      //Escribimos el codigo que queremos usar tal cual
     const newUser = new User(1829333,"BrianOrihuelaP","Brian","Engineer")
     expect(newUser.id).not.toBeUndefined(); 
     //este predicado nos dice que lo esperado debe de estar si o si definido, si no esta definido no pasa la prueba
   });

  })