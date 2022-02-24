//internal imports
const Intern = require('../lib/Intern');

test('Intern class can set school via constructor', () => {
   const school = 'MIT';
   const intern = new Intern('John', 1, 'johndoe@gmail.com', school);
   expect(intern.school).toBe(school);
});

test('Manager instance can get school via getSchool() method', () => {
   const school = 'MIT';
   const intern = new Intern('John', 1, 'johndoe@gmail.com', school);
   expect(intern.getSchool()).toBe(school);
});

test('getRole() method returns role "Intern" for Intern class', () => {
   const role = 'Intern';
   const intern = new Intern('John', 1, 'johndoe@gmail.com', 'MIT');
   expect(intern.getRole()).toBe(role);
});
