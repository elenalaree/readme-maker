// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// const generatePage = require('./utils/page-template');


inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your Project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.'
        },
        {
            type:'input',
            name: 'instructions',
            message: 'Please explain how to install your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How would one use this application?'
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What can be contributed to your Project?'
        },
        
    ])

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./utils/README.md', generatePage(name, github), err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
            }
    
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
            ok: true,
            message: 'File created!'
            });
        });
    });
}


// fs.writeFile('./utils/README.md', generatePage(name, github), err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
