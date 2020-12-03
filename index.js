const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
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
        name: "desc",
        message: "Please enter your project description:"
    },
    {
        type: "input",
        name: "install",
        message: "What are the steps required for installation?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the instructions for using your project?"        
    },
    {
        type: "input",
        name: "contributors",
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
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations! Your README.md file has been generated!")
    });
};

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
    try {
        // prompt inquirer questions
        const userResponse = await inquirer.prompt(questions);
        console.log("User Response: ", userResponse);

        // pass userResponse to generateMarkdown
        const markdown = generateMarkdown(userResponse);
        console.log(markdown);

        // write markdown to file
        await writeFileAsync("test-README.md", markdown);
    } catch (error) {
        console.log(error);
    }
};

// function call to initialize program
init();
