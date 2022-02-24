//internal imports
const Employee = require('./Employee');

//Manager class that extends employ4ee
class Manager extends Employee {
   constructor(name, id, email, officeNumber) {
      //get common props from parent class
      super(name, id, email);

      //own prop of Manager class
      this.officeNumber = officeNumber;
   }

   //return officeNumber
   getOfficeNumber() {
      return this.officeNumber;
   }

   //return role
   getRole() {
      return 'Manager';
   }
}

//Instance of Manager Class
const manager = new Manager();

//all method class as described on the docs
manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNumber();
manager.getRole();

//export class
module.exports = Manager;
