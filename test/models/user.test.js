const User = require("./../../app/models/User")

describe("Suite de pruebas #1", () => {
    test('Requerimiento 1 : Creacion del modelo User', () => {
       //Escribimos el codigo que queremos usar tal cual
      const newUser = new User(1829333,"BrianOrihuelaP","Brian","Engineer")
      expect(newUser.id).toBe(1829333);
      expect(newUser.username).toBe("BrianOrihuelaP");
      expect(newUser.name).toBe("Brian");
      expect(newUser.bio).toBe("Engineer");
    })

     test('Requerimiento 2 : Datos de tipo fecha (user) ', () => {
      //Escribimos el codigo que queremos usar tal cual
     const newUser = new User(1829333,"BrianOrihuelaP","Brian","Engineer")
     expect(newUser.id).not.toBeUndefined(); 
     //este predicado nos dice que lo esperado debe de estar si o si definido, si no esta definido no pasa la prueba
   })

      test('Requerimiento 3 : Agregando getters (user) ', () => {
        //Escribimos el codigo que queremos usar tal cual
      const newUser = new User(1829332,"Explorer","Ulises","Engineer")
      expect(newUser.getName).toBe("Ulises"); 
      expect(newUser.getUsername).toBe("Explorer");
      expect(newUser.getBio).toBe("Engineer");
      expect(newUser.getId).toBe(1829332);
    })

    test('Requerimiento 4 : Agregando setters (user) ', () => {
      //Escribimos el codigo que queremos usar tal cual
    const newUser2 = new User(1829332,"Explorer","Ulises","Engineer")
      newUser2.setUsername = "Brian-Soft"
      newUser2.setBio = "Developer"

      expect(newUser2.username).toBe("Brian-Soft")
      expect(newUser2.bio).toBe("Developer")
    })

  })