const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { choices } = require('yargs');
const { throwStatement } = require('@babel/types');

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
    ]);

};

const getEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the employee role',
            choices: ['Engineer', 'Intern']
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
            when: input.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the school the intern attends",
            when: input.role === 'Intern'
        }
    ]);

};

function init() {
    getManager()
        .then((managerInput) => {
            managerInput = { name, id, email, officeNumber };
        })
        .catch((err) => console.error(err));

    getEmployee()
        .then((employeeInput) => {
            employeeInput = { name, id, email, github, school };
        })
        .catch((err) => console.error(err));

}

init()


