const Manager = require("../src/Manager");

describe("Manager", () => {
  it("Creates an manager", () => {
    const employee = new Manager();
    expect(employee).toBeTruthy();
  });
});
