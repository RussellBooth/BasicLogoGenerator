//enables the use of inquirer for user input
const inquirer = require('inquirer');
//enables the use of the file save and write capabilities
const fs = require('fs');
//enables the use of the logomaker file
const generateLogoMaker = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');
const Square = require('./lib/shapes.js');
const Triangle = require('./lib/shapes.js');

function writeToFile(fileName, generateLogoMaker) {
    fs.writeFile(fileName, generateLogoMaker, err =>
        err ? console.log(err) : console.log(`Generated ${fileName}`))
}


//function using inquirer to get user input on information about their logo
function getLogoInfo (questions) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'logoName',
                message: 'Please enter three characters for your logo name',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color name or hexadecimal for your logo text would your like?'
            },
            {
                type: 'list',
                name: 'logoShape',
                message: 'What shape would you like for your logo?',
                choices: ['circle', 'square', 'triangle'], 
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What is the color name or hexadecimal for your desired shape color',
            },    
        ])
//if the logo's name is greater than 3 characters, prompts the user to enter 3 or less characters and re-runs the inquirer prompt
//otherwise it runs the logo maker and write file app
        .then((data) => {
            if (data.logoName.length > 3) {
                throw new Error (
                    'Please enter a logo name less than 3 characters.'
                    )} else {
                        const fileName = `${data.logoName}.svg`;

                        const generateLogo = generateLogoMaker(data);
    
                        writeToFile(fileName, generateLogo);
                    };
            })
};
        

//runs the application with function call
getLogoInfo();