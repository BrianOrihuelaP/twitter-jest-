const userService = require("../../app/services/userServices")

describe("Suite de pruebas #2 - Probando servicios", () => {
    /* test('Requerimiento 1 : Creando nuevos usuarios con el servicio userService', () => {
       //Escribimos el codigo que queremos usar tal cual
      const user = userService.create(1829333,"BrianOrihuelaP","Brian")
      //aqui creamos un objeto que manda a llamar la funcion create que se encentra en servicios/userServices
      expect(user.id).toBe(1829333);
      expect(user.username).toBe("BrianOrihuelaP");
      expect(user.name).toBe("Brian");
      //se hacen las pruebas para verificar si nuestro servicio funciona de la manera correcta
    }) */

    test('Requerimiento 2 : método estático en `getInfo`, recibe un objeto de la clase `User`, regresa una lista con los atributos', () => {
      //Escribimos el codigo que queremos usar tal cual
     const user = userService.create(1829333,"BrianOrihuelaP","Brian")
     const userInfoList = userService.getInfo(user)
     //aqui creamos un objeto que manda a llamar la funcion create que se encentra en servicios/userServices
     expect(user.id).toBe(1829333);
     expect(userInfoList[0]).toBe(1829333);
     expect(userInfoList[1]).toBe("BrianOrihuelaP");
     expect(userInfoList[2]).toBe("Brian"); 
     expect(userInfoList[3]).toBe("Sin Bio");
     //se hacen las pruebas para verificar si nuestro servicio funciona de la manera correcta
   })

  })