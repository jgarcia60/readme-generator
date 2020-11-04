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
        choices: ['MIT', 'GNU_GPLv3', 'Apache', 'ISC'], 
    },
    // {
    //     type: 'input',
    //     message: 'What do you want in the Badges section?',
    //     name: 'badges',
    // },
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
    fs.writeFile(fileName, data, "utf8", function(err) {
        if (err) throw err;
});
}



inquirer.prompt(
    questions
).then((response) => {
   
    const content = `# ${response.title}
![screenshot](https://img.shields.io/badge/license-${response.license}-green)

## Description  

${response.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${response.installInstructions}


## Usage   

${response.usage} 

## Credits

${response.credits}


## License

This project is covered under the ${response.license} license.

## Contributing

${response.contributing}

## Tests

${response.tests}


## Questions

If you would like further information on this project or other projects I've worked on, check out my github profile at https://www.github.com/${response.username}.

For any other questions, feel free to email me at ${response.email}`;
    writeToFile('exampleREADME.md', content);
});