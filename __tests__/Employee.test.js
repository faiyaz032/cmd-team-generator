//internal imports
const Employee = require('../lib/Employee');

/*THIS IS THE INITIAL MOCKUP FOR EVERY CLASS TESTS*/

/**
 * Test mockups
 * 1.Check if the employee class can create instance
 * 2.Check if the instance can set name via constructor
 * 3.Check if the instance can set id via constructor
 * 4.Check if the instance can set email via constructor
 * 5.Check if the instance can get name via getName() method
 * 6.Check if the instance can get id via getId() method
 * 7.Check if the instance can get email via getEmail() method
 * 8.Check if the instance can get role 'Employee' via getRole() method
 */

test('Employee class can create an instance', () => {
   const employee = new Employee();
   expect(typeof employee).toBe('object');
});

test('employee instance can set name via constructor', () => {
   const name = 'John';
   const employee = new Employee(name);
   expect(employee.name).toBe(name);
});

test('employee instance can set id via constructor', () => {
   const name = 'John';
   const id = 'f01';
   const employee = new Employee(name, id);
   expect(employee.id).toBe(id);
});

test('employee instance can set email via constructor', () => {
   const name = 'John';
   const id = 'f01';
   const email = 'johndoe@gmail.com';
   const employee = new Employee(name, id, email);
   expect(employee.email).toBe(email);
});

test('employee instance can get name via getName() method', () => {
   const name = 'John';
   const e = new Employee(name);
   expect(e.getName()).toBe(name);
});

test('employee instance can get id via getId() method', () => {
   const id = 'f01';
   const name = 'John';
   const e = new Employee(name, id);
   expect(e.getId()).toBe(id);
});

test('employee instance can get email via getEmail() method', () => {
   const id = 'f01';
   const name = 'John';
   const email = 'johndoe@gmail.com';
   const e = new Employee(name, id, email);
   expect(e.getEmail()).toBe(email);
});

test('getRole() method returns "Employee" for Employee class', () => {
   const shouldReturnRole = 'Employee';
   const id = 'f01';
   const name = 'John';
   const email = 'johndoe@gmail.com';
   const e = new Employee(name, id, email);
   expect(e.getRole()).toBe(shouldReturnRole);
});
