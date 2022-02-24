//dependencies
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
//internal imports
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const questions = require('./questions');
const renderHtml = require('./src/renderHtml');

//Team array to store employees
const team = [];

//Create path for generate main team.html file
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

//initial function to create a team
const createTeam = () => {
   inquirer
      .prompt(questions)
      .then((firstAnswer) => {
         inquirer
            .prompt([
               {
                  when: () => firstAnswer.role === 'Manager',
                  type: 'input',
                  message: 'What is office number',
                  name: 'officeNumber',
               },
               {
                  when: () => firstAnswer.role === 'Engineer',

                  type: 'input',
                  message: 'What is the GitHub Username?',
                  name: 'github',
               },

               {
                  when: () => firstAnswer.role === 'Intern',

                  type: 'input',
                  message: "What is the school's name?",
                  name: 'schoolName',
               },

               {
                  type: 'confirm',
                  message: 'Would you like to add another employee?',
                  name: 'addEmployee',
               },
            ])
            .then((secondAnswer) => {
               //extract inputs from firstAnswer
               const { role, name, id, email } = firstAnswer;

               //check the roles and add employees accordingly
               if (role == 'Manager') addEmployee(name, id, email, role, secondAnswer.officeNumber);
               if (role == 'Engineer') addEmployee(name, id, email, role, secondAnswer.github);
               if (role == 'Intern') addEmployee(name, id, email, role, secondAnswer.schoolName);

               if (secondAnswer.addEmployee) {
                  createTeam(); //recursive function call
               } else {
                  fs.writeFile(outputPath, renderHtml(team), (err) => {
                     if (err) {
                        throw err;
                     }
                     console.log('An HTML file of the team generated successfully!');
                  });
               }
            })
            .catch((error) => {
               if (error) {
                  console.log(error);
               }
            });
      })
      .catch((error) => {
         if (error) {
            console.log(error);
         }
      });
};

createTeam();

//Helper function too add employee to the team array. X refers to the input based on role
const addEmployee = (name, id, email, role, x) => {
   if (role == 'Manager') {
      //create manager instance
      const manager = new Manager(name, id, email, x);
      //push the manager instace into the team array
      team.push(manager);
   }

   if (role == 'Engineer') {
      //create manager instance
      const engineer = new Engineer(name, id, email, x);
      //push the manager instace into the team array
      team.push(engineer);
   }

   if (role == 'Intern') {
      //create manager instance
      const intern = new Intern(name, id, email, x);
      //push the manager instace into the team array
      team.push(intern);
   }
};
