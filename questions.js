const questions = [
   {
      type: 'list',
      name: 'role',
      message: 'What is employee role?',
      choices: ['Manager', 'Engineer', 'Intern'],
   },
   {
      type: 'input',
      name: 'name',
      message: 'What is the Employee name?',
   },

   {
      type: 'input',
      name: 'id',
      message: 'What the Employee ID?',
   },
   {
      type: 'input',
      name: 'email',
      message: 'What is the Employee email?',
   },
];
module.exports = questions;
