const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
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
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information for your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license do you want to use for your project?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
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
