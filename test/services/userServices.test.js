const userService = require("../../app/services/userServices")

describe("Suite de pruebas #2 - Probando servicios", () => {
    test('Requerimiento 1 : Creando nuevos usuarios con el servicio userService', () => {
       //Escribimos el codigo que queremos usar tal cual
      const user = userService.create(1829333,"BrianOrihuelaP","Brian")
      //aqui creamos un objeto que manda a llamar la funcion create que se encentra en servicios/userServices
      expect(user.id).toBe(1829333);
      expect(user.username).toBe("BrianOrihuelaP");
      expect(user.name).toBe("Brian");
      //se hacen las pruebas para verificar si nuestro servicio funciona de la manera correcta
    })

    test('Requerimiento 2 : método estático en `getInfo`, recibe un objeto de la clase `User`, regresa una lista con los atributos', () => {
      //Escribimos el codigo que queremos usar tal cual
     const user = userService.create(1829333,"BrianOrihuelaP","Brian")
     const userInfoList = userService.getInfo(user)
     //aqui creamos un objeto que manda a llamar la funcion create que se encentra en servicios/userServices
     //ademas se manda a llamar la funcion getInfo la cual debe de retornar una lista (array)
     expect(user.id).toBe(1829333);
     expect(userInfoList[0]).toBe(1829333);
     expect(userInfoList[1]).toBe("BrianOrihuelaP");
     expect(userInfoList[2]).toBe("Brian"); 
     expect(userInfoList[3]).toBe("Sin Bio");
     //se hacen las pruebas para verificar si nuestro servicio funciona de la manera correcta
   })

   test('Requerimiento 3 : `updateUserUsername` recibe un objeto de la clase `User` que actualizará el valor de `username` ', () => {
    //Escribimos el codigo que queremos usar tal cual
   const user = userService.create(1829333,"BrianOrihuelaP","Brian")
   //aqui creamos un objeto que manda a llamar la funcion create que se encentra en servicios/userServices
   userService.updateUserUsername(user,"Ulises")
   expect(user.username).toBe("Ulises");
   //se hacen las pruebas para verificar si nuestro servicio funciona de la manera correcta
  })

  test('Requerimiento 4 : A partir de una lista de usuarios, obtener solo los userNames ', () => {
    //Escribimos el codigo que queremos usar tal cual
   const user0 = userService.create(1829333,"BrianOrihuelaP","Brian")
   const user1 = userService.create(1829332,"RaulNirvana","Raul")
   const user2 = userService.create(1829331,"Luis-99","Luis")
   //aqui creamos un objeto que manda a llamar la funcion create que se encentra en servicios/userServices
   const userNames = userService.getAllUsernames([user0,user1,user2])
   expect(userNames).toContain("BrianOrihuelaP");
   expect(userNames).toContain("Luis-99");
   expect(userNames).toContain("Luis") //con este error nos damos cuenta que efectivamente tenemos una lista con los usernames
   //se hacen las pruebas para verificar si nuestro servicio funciona de la manera correcta
  })

  })