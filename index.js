const inquirer = require('inquirer');
const fs = require('fs');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const { join } = require('path');

var cards = '';

function createHTML(cardsContent) {
    const fileContent = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initil-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="./style.css">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
            <style>
            .row>* {
                padding-left: 0% !important;
                padding-right: 0% !important;
            }
    
            .row {
                justify-content: center;
            }
    
            .title {
                background-color: #0081a7 !important;
            }
    
            .info {
                background-color: #00afb9 !important;
            }
        </style>
        </head>
        <body>
            <div class="py-2 mb-4 text-center title text-white">
                <h1>My Team</h1>
            </div>
            <div class="container">
                <div class="row">
                ${cardsContent}
                </div>
            </div>
        </body>
    </html>`;
    fs.writeFile(join(process.cwd(), 'dist', 'teamProfile.html'), fileContent, (err) =>
        err ? console.log(err) : console.log('Team created succesfully!')
    );
}

function teamDataInput() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What do you want to do next?',
            name: 'option',
            choices: ['Add engineer', 'Add intern', 'quit'],
        }
    ])
    .then(async(response) => {
        switch(response.option) {
            case 'Add engineer':
                const eng = new engineer();
                const engineerSnippet = await eng.inquireEnginner();
                cards = cards + engineerSnippet
                console.log('Enginner Added!');
                teamDataInput();
                break;
            case 'Add intern':
                const int = new intern();
                const interSnippet = await int.inquireIntern();
                cards = cards + interSnippet
                console.log('Intern Added!');
                teamDataInput();
                break;
            case 'quit':
                if(cards != ''){
                    createHTML(cards);
                }else{
                    console.log('Goodbye!')
                    process.exit(0);
                }
        }
    })
}

async function start() {
    const man = new manager();
    const managerSnippet = await man.inquireManager();
    cards = cards + managerSnippet
    console.log('Manager Added!');
    teamDataInput();
}

start();

