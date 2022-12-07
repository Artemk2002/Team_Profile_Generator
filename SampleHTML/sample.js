const generateTeam = team => {
    // create the manager html
    const generateManager = manager => {
        return `
    <div class="employeeCard">
        <div class="cardTitle">
            <h2 class="cardTitle">${manager.getName()}</h2>
            <h3 class="cardTitle">${manager.getRole()}</h3>
        </div>
        <div class="cardBody">
            <dev class="list-group">
                <p class="item">ID: ${manager.getId()}</p>
                <p class="item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p class="litem">Office number: ${manager.getOfficeNumber()}</p>
            </dev>
        </div>
    </div>
        `;
    };
    // create the html for engineers
    const generateEngineer = engineer => {
        return `
<div class="employeeCard">
    <div class="cardTitle">
        <h2 class="cardTitle">${engineer.getName()}</h2>
        <h3 class="cardTitle">${engineer.getRole()}</h3>
    </div>
    <div class="cardBody">
        <dev class="list-group">
            <p class="item">ID: ${engineer.getId()}</p>
            <p class="item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p class="litem">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></p>
        </dev>
    </div>
</div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
<div class="employeeCard">
    <div class="cardTitle">
        <h2 class="cardTitle">${intern.getName()}</h2>
        <h3 class="cardTitle">${intern.getRole()}</h3>
    </div>
    <div class="cardBody">
        <dev class="list-group">
            <p class="item">ID: ${intern.getId()}</p>
            <p class="item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p class="item">School: ${intern.getSchool()}</p>
        </dev>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <dev class="title">
        <header>
         <h1>My Team Profile</h1>
        </header>
    </dev>
    <div class="container">
        <div class="teamCards">
             ${generateTeam(team)}
        </div>
    </div>
</body>
</html>
    `;
};