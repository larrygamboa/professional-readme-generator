const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is the title of your project?",
    "Please enter your project description.",
    "What are the steps required for installation?",
    "What are the instructions for using your project?",
    "Please enter git hub user names of the contributors, if any.",
    "Please provide instructions on how to run tests.",
    "Please select a license for your project.",
    "What is your GitHub user name?",
    "What is your email address?"
];

// function to write README file
function writeToFile(fileName, data) {

};

// function to initialize program
function init() {

}

// function call to initialize program
init();
