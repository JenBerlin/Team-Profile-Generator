const Intern = require("../src/Intern");

describe("Intern", () => {
  it("Creates an intern", () => {
    const employee = new Intern();
    expect(employee).toBeTruthy();
  });
});
