const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { choices } = require('yargs');
const { throwStatement } = require('@babel/types');
const teamArray = [];

const getManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name of team Manager'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter Manager ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter managers email'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter managers office phone number'
        }
    ])
        .then((managerInput) => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
            teamArray.push(manager);
            getEmployee();
        })

        .catch((err) => console.error(err));

};

const getEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Add Employee',
            choices: ['Engineer', 'Intern', 'No More Employees']
        },

    ])
        .then((employeeInput) => {
            switch (employeeInput.role) {
                case 'Engineer':
                    return getEngineer();
                case 'Intern':
                    return getIntern();
                case 'No More Employees':
                    // console.log(teamArray);
                    // console.log(generateHTML(teamArray));
                    return fs.writeFile('./dist/index.html', generateHTML(teamArray), (err) =>
                        err ? console.log(err) : console.log('Successfully created index.html!')
                    );

            }

        })
        .catch((err) => console.error(err));

};

const getEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter employee name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter their employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter employee github username',
        },
    ])
        .then((engineerInput) => {
            const { name, id, email, github } = engineerInput;
            const engineer = new Engineer(name, id, email, github);
            teamArray.push(engineer);
            getEmployee();
        })
        .catch((err) => console.error(err));
}

const getIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter employee name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter their employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email'
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the school the intern attends",
        },
    ])
        .then((internInput) => {
            const { name, id, email, school } = internInput;
            const intern = new Intern(name, id, email, school);
            teamArray.push(intern);
            getEmployee();
        })
        .catch((err) => console.error(err));
}




getManager()



