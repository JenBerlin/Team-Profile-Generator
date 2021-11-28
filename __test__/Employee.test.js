const Employee = require("../src/Employee");

describe("Employee", () => {
  it("Creates an employee", () => {
    const employee = new Employee();
    expect(employee).toBeTruthy();
  });

  it("Creates an employee with name, id and email", () => {
    const employee = new Employee("Bob", 42, "info@info.com");
    expect(employee.getName()).toEqual("Bob");
    expect(employee.getId()).toEqual(42);
    expect(employee.getEmail()).toEqual("info@info.com");
  });

  //   it("Creates an employee with another name, id and email", () => {
  //     const employee = new Employee("Egon", 33, "mail@info.com");
  //     expect(employee.getName()).toEqual("Egon");
  //     expect(employee.getId()).toEqual(33);
  //     expect(employee.getEmail()).toEqual("mail@info.com");
  //   });

  it("Creates an employee with role employee", () => {
    const employee = new Employee("Bob", 42, "info@info.com");
    expect(employee.getRole()).toEqual("Employee");
  });
});
