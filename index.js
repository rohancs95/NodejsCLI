#!/usr/bin/env node
const aboutMe = require('./commands/aboutme');
const contactMe = require('./commands/contactme');
const techSkills = require('./commands/techSkills');
const exp = require('./commands/exp');
const inquirer = require('inquirer');

const index = () => {
    console.log("Welcome to my profile...");
    inquirer.prompt([{
        type: "list",
        choices: ['contactme', 'aboutme', 'techSkills', 'exp'],
        name: "answer"
    }]).then((res) => {
        switch (res.answer) {
            case 'contactme':
                contactMe();
                break;
            case 'aboutme':
                aboutMe();
                break;
            case 'techSkills':
                techSkills();
                break;
            case 'exp':
                exp();
                break;

        }
    })
}

index();
module.exports = index;