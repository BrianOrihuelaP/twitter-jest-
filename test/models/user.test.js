describe("Suite de pruebas #2", () => {
    test('Case 1: Probando mi spiderverse', () => {
       //Escribimos el codigo que queremos usar tal cual
      const newUser = new User(1829333,"BrianOrihuelaP","Brian","I´ma sotfware engineer","10/05/2022","10/05/2022")
    
      expect(newUser.name).toBe("BrianOrihuelaP");
       
    });
  })