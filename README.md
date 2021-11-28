# 10 Object-Oriented Programming: Team Profile Generator

Table of content

- [10 Object-Oriented Programming: Team Profile Generator](#10-object-oriented-programming-team-profile-generator)
- [Description](#description)
- [Building Structure](#building-structure)
- [Screenshots](#screenshots)
- [Tech/Framwork used](#techframwork-used)
- [Repositery content + link](#repositery-content--link)

# Description

This application is an commandline application, which allows the user to generate a "Team Profil Overview". By starting the application the user - in this case a manager or a team - will be asked to answer several question, which will create multiple team member cards. The first set of question (in the terminal) are refering to the manage itself: asking for the name, employee id, email address and office number. After finishing the manager questions the user will be asked to select between three options to move forward: setting up a card for "Engineer", setting up a card for "Intern" or to end the "Team Profile Generator". Choosing one of the team member options (Engineer or Intern) the user will get displayed a slightly modified set of questions. For "Engineers" the GitHub account name is needed instead of the office number. For "Interns" the attended school. The user/Manger can add as many cards as she/he needs each set of question will end with three options of continueing with team member cards or to finish. By choosing to end a html files gets generated. By opening the html file the user can access a designed web application interface on which the team member cards are displayed.

Email link ...

# Building Structure

index.js: is holding the questions and two fuctions: wirteToFile + start

generateMarkdown.js: is holding the license list content and four fuctions: render LicenseBedge + render LicenseLink + renderLicenseSection + generateMarkdown and the module.exports

# Screenshots

![Getting Started](./image/1-Screenshot.png)

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
- Walkthrough-Video: https://drive.google.com/file/d/1Tz3pSJtS88r5wwPcFMTUdy__0--OUH6U/view
