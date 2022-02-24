//internal imports
const Engineer = require('../lib/Engineer');

test('Engineer class set Github username via constructor', () => {
   const githubUsername = 'john032';
   const engineer = new Engineer('John', 1, 'johndoe@gmail.com', githubUsername);
   expect(engineer.github).toBe(githubUsername);
});

test('Can get GitHub username via getGithub()', () => {
   const githubUsername = 'john032';
   const engineer = new Engineer('John', 1, 'johndoe@gmail.com', githubUsername);
   expect(engineer.getGithub()).toBe(githubUsername);
});

test('getRole() method returns role "Engineer" for Engineer class', () => {
   const role = 'Engineer';
   const engineer = new Engineer('John', 1, 'johndoe@gmail.com', 'john032');
   expect(engineer.getRole()).toBe(role);
});
