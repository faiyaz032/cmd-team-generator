//internal imports
const Manager = require('../lib/Manager');

test('Manager class can set office number via constructor', () => {
   const officeNumber = 100;
   const manager = new Manager('John', 1, 'johndoe@gmail.com', officeNumber);
   expect(manager.officeNumber).toBe(officeNumber);
});

test('getRole() method returns role "Manager" for Engineer class', () => {
   const role = 'Manager';
   const manager = new Manager('John', 1, 'johndoe@gmail.com', 100);
   expect(manager.getRole()).toBe(role);
});

test('Manager instance can get office number via getOffice()', () => {
   const officeNumber = 100;
   const manager = new Manager('Foo', 1, 'test@test.com', officeNumber);
   expect(manager.getOfficeNumber()).toBe(officeNumber);
});
