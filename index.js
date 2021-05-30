const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = require('./src/template.js')
const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer')

const outputDirectory = path.resolve(__dirname, 'dist')
const outputFile = path.join(outputDirectory, 'generateTeam.html')
const render = require("./src/template")

const teamArray = []


function initApp(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select an employee role from the list below:',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'role'
        },

    ])
        .then((employeeInfo) => {
            if (employeeInfo.role === 'Manager') {
                console.log('Add Manager information');
                addManager()

            } else if (employeeInfo.role === 'Engineer') {
                console.log('Add Engineer information');
                addEngineer()

            } else if (employeeInfo.role === 'Intern ') {
                console.log('Add Intern');
                addIntern()

            } else (employeeInfo.role === '')
        });
};



    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's id?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's GitHub username?",
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            // createTeam();
            team();
        });
    }


        function addManager() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "What is your manager's name?",
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is your manager's email?",
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is your manager's office number?",
                }
            ]).then(answers => {
                const manager = new Manager(answers.managerName, answers.managerEmail, answers.officeNumber);
                teamArray.push(manager);
                // createTeam();
                team();
            });
        }

            function addIntern() {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "internName",
                        message: "What is your intern's name?",
                    },
                    {
                        type: "input",
                        name: "internEmail",
                        message: "What is your intern's email?",
                    },
                    {
                        type: "input",
                        name: "internSchool",
                        message: "What is your intern's school?",
                    }
                ]).then(answers => {
                    const intern = new Intern(answers.internName, answers.internEmail, answers.internSchool);
                    teamArray.push(intern);
                    // createTeam();
                    team();
                });
            }

        function buildTeam() {
            fs.writeFileSync(outputFile, render(teamArray), "utf-8");
        }

    

initApp();
buildTeam();



