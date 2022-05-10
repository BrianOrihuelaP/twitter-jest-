const User = require("./../../app/models/User")

describe("Suite de pruebas #2", () => {
    test('Case 1: Probando mi spiderverse', () => {
       //Escribimos el codigo que queremos usar tal cual
      const newUser = new User(1829333,"BrianOrihuelaP","Brian","Engineer","10/05/2022","10/05/2022")
      expect(newUser.id).toBe(1829333);
      expect(newUser.username).toBe("BrianOrihuelaP");
      expect(newUser.name).toBe("Brian");
      expect(newUser.bio).toBe("Engineer");
    });
  })