//internal imports
const Employee = require('./Employee');

//Engineer class that extends employee
class Engineer extends Employee {
   constructor(name, id, email, github) {
      //get common props from parent class
      super(name, id, email);
      //own prop for Engineer class
      this.github = github;
   }
   //returns github username
   getGithub() {
      return this.github;
   }

   //returns role
   getRole() {
      return 'Engineer';
   }
}

//Instance of Engineer class
const engineer = new Engineer();

//call of the methods as described on the docs
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();
engineer.getRole();

//export class
module.exports = Engineer;
