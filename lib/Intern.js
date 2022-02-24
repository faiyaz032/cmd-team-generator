//internal imports
const Employee = require('./Employee');

//Intern class that extends employee
class Intern extends Employee {
   constructor(name, id, email, school) {
      //get common props from parent class
      super(name, id, email);
      //own prop of Intern class
      this.school = school;
   }

   //returns school name
   getSchool() {
      return this.school;
   }

   //returns role
   getRole() {
      return 'Intern';
   }
}

//instance of intern class
const intern = new Intern();

//call of the methods as described on the docs
intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();

//export Intern class
module.exports = Intern;
