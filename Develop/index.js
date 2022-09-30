// TODO: Include packages needed for this application 
const inquirer           = require('inquirer');
const {writeFile}                 = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown') 
console.log(generateMarkdown)

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of the project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How can this application be installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please detail any usage information.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can one contribute to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please detail any test instructions.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ['MIT', 'TEST'],
    },
]).then((answers) => writeFile('README.md', generateMarkdown(answers))
  .then(() => console.log('File was created'))
  .catch((err) => console.log(err))
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
