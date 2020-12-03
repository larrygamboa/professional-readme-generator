const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Please enter your project description:"
    },

    {
        type: "input",
        name: "installation",
        message: "What are the steps required for installation?"
    },

    {
        type: "input",
        name: "instructions",
        message: "What are the instructions for using your project?"        
    },

    {
        type: "input",
        name: "contributers",
        message: "Please enter git hub user names of the contributors, if any:"        
    },

    {
        type: "input",
        name: "test",
        message: "Please provide instructions on how to run tests:"
    },

    {
        type: "list",
        name: "license",
        message: "Please select a license for your project:",
        choices: ['Apache License 2.0', 'GNU General Public License (GPL)', 'MIT license', 'Mozilla Public License 2.0', 'None']
    },

    {
        type: "input",
        name: "username",
        message: "What is your GitHub user name?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    
};

// function to initialize program
function init() {

}

// function call to initialize program
init();
