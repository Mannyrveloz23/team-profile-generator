const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/htmlgenerator');
const path = require('path');
const { type } = require('os');
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const team = []

const promptManager = () => {
return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Write your name",
        },
        {
            type: "input",
            name: "id",
            message: "Write your id",
        },
        {
            type: "input",
            name: "email",
            message: "Write your email",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Write your office numer",
        }
    
]).then(answers => {
    const manager = new Manager(
        answers.name, answers.input, answers.email, answers.officeNumber
    )
    team.push(manager);
    addEmployee();
})
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'roleChoices',
            message: 'Choose a profile option',
            choices: ['Add engineer', 'Add intern', 'Team complete']
        }
    ]).then(userChoice => {
        switch (userChoice.roleChoices) {
            case 'Add engineer':
            promptEngineer();
            break;
            case 'Add intern':
            promptIntern();
            break;
            default:
            genTeam();

        }
    })
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Type the Engineer's name"
            
        },
        {
            type: 'input',
            name: 'id',
            message: "Type the Engineer's id"
        },
        {
            type: 'input',
            name: 'email',
            message: "type the Engineer's email"
        },
        {
            type: 'input',
            name: 'github',
            message: "type the Engineer's Github account"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        addEmployee();
    })    
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Type the Intern's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Type the Intern's id"
        },
        {
            type: 'input',
            name: 'email',
            message: "Type the Intern's email"
        },
        {
            type: 'input',
            name: 'school',
            message: "Type the Inten's school name"
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        addEmployee();
    })
}

const genTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateHTML(team), "utf-8");
}

promptManager();