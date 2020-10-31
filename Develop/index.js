const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What would you like your title to be?',
        name: 'title',
    }, 
    {
        type: 'checkbox',
        message: 'What sections do you want in your README?',
        name: 'tableOfContents',
        choices: ['Title', 'Description', 'Table of Contents', 'Installation', 'Usage', 'Credits', 'License', 'Badges', 'Contributing', 'Tests', 'Questions'],
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
    }, 
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installInstructions',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'inputs',
        message: 'What do you want in the credits section?',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Which license will you use?',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache', 'ISC'], 
    },
    {
        type: 'input',
        message: 'What do you want in the Badges section?',
        name: 'badges',
    },
    {
        type: 'input',
        message: 'What do you want to put in the Contributing section?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What do you want to put in the Tests section?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, "\t"), "utf8", function(err) {
        if (err) throw err;
});
}

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();


inquirer.prompt(
    questions
).then((response) => {
    console.log(response);
    const readMeContent = `Title: ${response.title} and Description: ${response.description}`;
    fs.writeFile('log.txt', readMeContent, 'utf8', function(err) {
        if (err) throw err;
    });
});