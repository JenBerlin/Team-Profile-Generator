const Manager = require("../src/Manager");

describe("Manager", () => {
  it("Creates an manager", () => {
    const employee = new Manager();
    expect(employee).toBeTruthy();
  });
});

//  it("Creates an manager with name, id and email", () => {
//    const employee = new Manager ("Bob", 42, "info@info.com", 1);
//    expect(employee.getName()).toEqual("Bob");
//    expect(employee.getId()).toEqual(42);
//    expect(employee.getEmail()).toEqual("info@info.com");
//              office number testen
//  });
