const inquirer = require("inquirer");
const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const generateHTML = require("./src/generateHTML");
const fs = require("fs");

const team = [];

const managerQuestions = [
  {
    type: "input",
    message: "Name of the manager?",
    name: "name",
  },
  {
    type: "input",
    message: "Employees ID?",
    name: "id",
  },
  {
    type: "input",
    message: "Email addres?",
    name: "email",
  },
  {
    type: "input",
    message: "Office number?",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "Select option:",
    name: "option",
    choices: ["Engineer", "Intern", "Finish building my team"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "Name of the engineer?",
    name: "name",
  },

  {
    type: "input",
    message: "Engineer ID?",
    name: "id",
  },
  {
    type: "input",
    message: "Email addres?",
    name: "email",
  },
  {
    type: "input",
    message: "GitHub username?",
    name: "gitHub",
  },
  {
    type: "list",
    message: "Select option:",
    name: "option",
    choices: [
      "Do you want to add another Engineer?",
      "Do you want to add another Intern",
      "Do you want to finish building your team",
    ],
  },
];

const internQuestions = [
  {
    type: "input",
    message: "Name of the intern?",
    name: "name",
  },

  {
    type: "input",
    message: "Intern ID?",
    name: "id",
  },
  {
    type: "input",
    message: "Email addres?",
    name: "email",
  },
  {
    type: "input",
    message: "Visited school?",
    name: "school",
  },
  {
    type: "list",
    message: "Select option:",
    name: "option",
    choices: [
      "Do you want to add another Engineer?",
      "Do you want to add another Intern",
      "Do you want to finish building your team",
    ],
  },
];

function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, (error) => {
    error && console.error("error", error);
  });
}

function start() {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      team.push(
        new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        )
      );
      let end = false;
      while (!end) {
        if (answers.option === "Engineer") {
          inquirer.prompt(engineerQuestions).then((answers) => {
            team.push(
              new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.gitHub
              )
            );
            end = answers.option === "Do you want to finish building your team";
          });
        } else if (answers.option === "Intern") {
          inquirer.prompt(internQuestions).then((answers) => {
            team.push(
              new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
              )
            );
            end = answers.option === "Do you want to finish building your team";
          });
        } else {
          end = true;
        }
      }
      const htmlString = generateHTML(answers);
      writeToFile("index.html", htmlString);
    })
    .catch((error) => {
      console.error(error);
    });
}

start();
