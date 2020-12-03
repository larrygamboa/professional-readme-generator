const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },

    {
        type: "input",
        message: "Please enter your project description:",
        name: "description"
    },

    {
        type: "input",
        message: "What are the steps required for installation?",
        name: "installation"
    },

    {
        type: "input",
        message: "What are the instructions for using your project?",
        name: "instructions"
    },

    {
        type: "input",
        message: "Please enter git hub user names of the contributors if any:",
        name: "contributers"
    },

    {
        type: "input",
        message: "Please provide instructions on how to run tests.",
        name: "test"
    },

    {
        type: "list",
        message: "Please select a license for your project:",
        choices: ['Apache License 2.0', 'GNU General Public License (GPL)', 'MIT license', 'Mozilla Public License 2.0', 'None'],
        name: "license"
    },

    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
