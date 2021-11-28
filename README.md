# 10 Object-Oriented Programming: Team Profile Generator

Table of content

- [10 Object-Oriented Programming: Team Profile Generator](#10-object-oriented-programming-team-profile-generator)
- [Description](#description)
- [Building Structure](#building-structure)
- [Screenshots](#screenshots)
- [Tech/Framwork used](#techframwork-used)
- [Repositery content + link](#repositery-content--link)

# Description

This application is an commandline application, which allows the user to generate a "Team Profil Overview". By starting the application the user - in this case a manager of a team - will be asked to answer several questions, which leads to creating multiple team member cards. The first set of questions (in the terminal) are refering to the manage itself: asking for the name, employee id, email address and office number. After finishing the manager questions the user will be asked to select between three options to move forward: setting up a card for "Engineer", setting up a card for "Intern" or to end the "Team Profile Generator". Choosing one of the team member options (Engineer or Intern) the user will get displayed a slightly modified set of questions. For "Engineers" the GitHub account name is needed instead of the office number. For "Interns" the attended school. The user/Manager can add as many cards as she/he needs each set of questions will end with three options of continueing with team member cards or to finish. By choosing to end a html files gets generated. By opening the generated html file via a browser the user can access a designed web application interface on which the team member cards are visible.

# Building Structure

The application has been developed by following a Test Driven Development approach. Files can be found in the test folder. Building up on this approach first the main class files (Employee.js in scr) has been developed. Refering to the main class (Employee.js) subclasses has been created for each role "Manager", "Engineer" and "Intern". Each subclass contains an additional information code. The code for the commandline usage has been added in index.js. This file contains the related questions and the fuction to push the answers to the "generateHTML.js" code. From where the "index.html" file gets gerated automatically by using template literals. The integrated html uses Bootstrap for the css.

# Screenshots

![Getting Started](./image/Screenshot-1.png)

# Tech/Framwork used

- Node.js
- npm packages: require, express
- JavaScript
- html
- bootstrap

# Repositery content + link

- test
  - Employee.test.js
  - Engineer.test.js
  - Intern.test.js
  - Manager.test.js
- image
  - 1-Screenshot.png
- src
  - Employee.js
  - Engineer.js
  - generateHTML.js
  - Intern.js
  - Manager.js
- .gitignore
- index.html
- index.js
- package-lock.json
- package.json
- README.md

- GitHub (dev branch): https://github.com/JenBerlin/Team-Profile-Generator/tree/dev
- Walkthrough-Video: https://drive.google.com/file/d/1fyKDyr4wD4V7dnOPGJ1lM171t0YUj6xH/view?usp=sharing
