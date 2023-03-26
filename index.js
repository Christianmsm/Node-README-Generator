// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./assets/utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description about your project.',
        }, 
        {
            type: 'input',
            name: 'installation',
            message: 'Are there any installation instructions necessary?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using your repository?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to include?',
            choices: ['MIT','APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can the user contribute?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command(s) should be ran to run a test?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Successfully generated README.md file.')
    });
} 


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown)
    });
}

// Function call to initialize app
init();







// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'project',
//         message: 'What is the name of your project?',
//     },
//     {
//         type: 'input',
//         name: 'description',
//         message: 'Write a short description about your project.',
//     },
//     {
//         type: 'input',
//         name: 'installation',
//         message: 'Are there any installation instructions necessary?',
//     },
//     {
//         type: 'input',
//         name: 'usage',
//         message: 'What does the user need to know about using your repository?',
//     },
//     {
//         type: 'list',
//         name: 'license',
//         message: 'What license would you like to include?',
//         choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
//     },
//     {
//         type: 'input',
//         name: 'contribute',
//         message: 'How can the user contribute?',
//     },
//     {
//         type: 'input',
//         name: 'test',
//         message: 'What command(s) should be ran to run a test?',
//     },
//     {
//         type: 'input',
//         name: 'github',
//         message: 'What is your GitHub username?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email address?',
//     },
// ])


//         .then((answers) => {
//             const markdown = MarkDown.generateReadme(answers)
//             fs.writeFile('README.md', markdown, function (err) {
//                 if (err) {
//                     console.log('There was an error', err)
//                 }
//                 else {
//                     console.log('Succesfully generated file!')
//                 }
//             })
//         })
//         .catch((error) => {
//             console.log(error)
//         })
