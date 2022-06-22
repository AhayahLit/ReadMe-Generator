// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        message: "What is the project name?",
        name: "Title"
}, {
    type: "input",
    message:"What is this project about?",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
}, {
    type: "Installation",
    message: "How and what to install program necessary to operate program.",
    name: "Installation"
}, {
    type: "input",
    message: "How to use this program.",
    name: "Usage"
}, {
    type: "input",
    message: "What licenses are being used.",
    name: "Licenses"
}, {
    type: "input",
    message: "Who Contributed to this project?",
    name: "Contributors"
}, {
    type: "input",
    message: "What commands will you be using?",
    name: "Tests"
}, {
    type: "input",
    message: "FAQ",
    name: "Questions"
}   ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
function(err) {
    console.log(fileName)
    console.log(data)
    if (err) {
        return console.log(err)
    } else {
        console.log("success")
    }
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
    })
}

// Function call to initialize app
init();
