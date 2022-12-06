//All preset NPM packeges and linked folders
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./SampleHTML/sample');
const Manager = require('./library/manager.js');
const Engineer = require('./library/engineer.js');
const Intern = require('./library/intern');
const members = [];

//First function choosing what type of employee to add
function askMembers(){
    inquirer.prompt([{    
            type:'list',
            name:'employeeLevel',
            choices:['Manager', 'Engineer', 'Intern', 'Done'],
            message:'Who would you like to add?'
        }]) 
        .then(({employeeLevel}) =>{
            if(employeeLevel === 'Manager'){
                createManager();
            } else if (employeeLevel === 'Engineer'){
                createEngineer();
            } else if (employeeLevel === 'Intern'){
                createIntern();
            } else if (employeeLevel === 'Done'){
                createHtml();
            }
})}

//questionary for a manager
function createManager(){
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'Name?',
        },{
            type:'number',
            name:'id',
            message:'ID?',
        },{
            type:'input',
            name:'email',
            message:'Email?',
        },{
            type:'input',
            name:'officeNum',
            message:'Office?',
        }
    ])
    .then((answerManager)=> {
    const newManager = new Manager(answerManager.name, answerManager.id, answerManager.email, answerManager.officeNum) 
    members.push(newManager);

    askMembers();
})}

//questionanry for the intern
function createIntern(){
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'Name?',
        },{
            type:'number',
            name:'id',
            message:'ID?',
        },{
            type:'input',
            name:'email',
            message:'Email?',
        },{
            type:'input',
            name:'school',
            message:'Name of the school intern attends?',
        }
    ])
    .then((answerIntern) =>{
     const newIntern = new Intern(answerIntern.name, answerIntern.id, answerIntern.email, answerIntern.school);
     members.push(newIntern);

        askMembers();
});
}

//questionary for the engineer
function createEngineer(){
    inquirer.prompt([
        {
            type:'input', 
            name:'name',
            message:'Name?',
        },{
            type:'number',
            name:'id',
            message:'ID?',
        },{
            type:'input',
            name:'email',
            message:'Email?',
        },{
            type:'input',
            name:'github',
            message:'GitHub username?',
        }
    ])
    .then((answerEngineer)=>{
     const newEngineer = new Engineer(answerEngineer.name, answerEngineer.id, answerEngineer.email, answerEngineer.github); 
     members.push(newEngineer);

        askMembers();
});
}

//Creates and write an HTML
function createHtml () {
    fs.writeFile('./GeneratedHtml/index.html', generateHTML(members), (err) => 
    err ? console.log(err) : console.log("Your HTML is in GeneratedHTML folder."))
        }
//Starts the first function on load
askMembers()


    
    




