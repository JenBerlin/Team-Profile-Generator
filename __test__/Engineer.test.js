const Engineer = require("../src/Engineer");

describe("Engineer", () => {
  it("Creates an engineer", () => {
    const employee = new Engineer();
    expect(employee).toBeTruthy();
  });
});
