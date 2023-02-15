const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

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
        name: "contribution",
        message: "What are the contribution guidelines?",
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

// function to generate lilcenses & badges

const badges = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GPL 3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "None": "",
};

const generateLicenseBadge = (license) => {return badges[license]};

// function to generate readme content

const generateReadmeContent = (answers) => {
    // generate badge
    const badge = generateLicenseBadge(answers.license);
    // all content
    return `
# ${answers.title}
    
${badge}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contribution}

## Tests

${answers.tests}

## License

This project is licensed under the ${answers.license} license.

## Questions

If you have any questions, you can contact me at ${answers.email}. You can also visit my GitHub profile at [${answers.github}](https://github.com/${answers.github}).`
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Successfully created README.md!"));
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        // generate
        const readmeContent = generateReadmeContent(answers);
        // write to file
        const fileName = answers.title + ".md"; 
        writeToFile(fileName, readmeContent);
    })
}

// function call to initialize program
init();
