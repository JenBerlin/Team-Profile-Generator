const inquirer = require("inquirer");
const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const generateHTML = require("./src/generateHTML");
const fs = require("fs");

const team = [];

const createAnotherEmployeeQuestion = {
  type: "list",
  message: "Select option:",
  name: "option",
  choices: ["Engineer", "Intern", "Done"],
};

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
  createAnotherEmployeeQuestion,
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
  createAnotherEmployeeQuestion,
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
  createAnotherEmployeeQuestion,
];

function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, (error) => {
    error && console.error("error", error);
  });
}

async function start() {
  let answers = await inquirer.prompt(managerQuestions);
  let employee = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
  );
  team.push(employee);

  while (answers.option !== "Done") {
    if (answers.option === "Engineer") {
      answers = await inquirer.prompt(engineerQuestions);
      employee = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.gitHub
      );
    } else if (answers.option === "Intern") {
      answers = await inquirer.prompt(internQuestions);
      employee = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
    }
    team.push(employee);
  }

  const htmlString = generateHTML(team);
  writeToFile("index.html", htmlString);
}

start();
