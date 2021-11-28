const Employee = require("./Employee");

// With "extend" you can inherit properties and methods from the base class
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }

  getRole() {
    return "Engineer";
  }

  getGitHub() {
    return this.gitHub;
  }
}

module.exports = Engineer;
