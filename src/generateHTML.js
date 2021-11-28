function generateHTML(team) {
  // console.log(team);
  let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <title>Team-Profile-Generator</title>
  </head>
  <body>
    <nav
      class="
        navbar navbar-nav navbar-center navbar-light
        progress-bar-striped progress-bar-animated
        bg-danger
      "
    >
      <p class="mb-0 h1 text-white font-weight-bold mb-1 mt-1">My Team</p>
    </nav>
    <div class="container d-flex flex-wrap h-100">`;
  for (const member of team) {
    // console.log(member);
    html += `<div class="card mx-auto mt-5"" style="width: 18rem">
        <div class="card-body bg-light">
          <h2 class="card-title text-danger font-weight-medium">${member.getName()}</h5>
          <h4 class="mb-3 text-primary">
          ${member.getRole()}
          </h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${member.getId()} </li>
            <li class="list-group-item">Email: ${member.getEmail()}</li>`;

    if (member.getRole() === "Manager") {
      html += `<li class="list-group-item">Office number: ${member.getOfficeNumber()}</li>`;
    } else if (member.getRole() === "Engineer") {
      html += `<li class="list-group-item">GitHub: ${member.getGitHub()}</li>`;
    } else if (member.getRole() === "Intern") {
      html += `<li class="list-group-item">School: ${member.getSchool()}</li>`;
    }
    html += `</ul>
        </div>
      </div>`;
  }

  html += `</div>
  </body>
</html>`;
  return html;
}

module.exports = generateHTML;
