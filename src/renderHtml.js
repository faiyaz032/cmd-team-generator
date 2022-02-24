//dependencies
const path = require('path');
const fs = require('fs');

//Directory of the templates
const TEMPLATES_DIR = path.resolve(__dirname, './templates');

const renderHTML = (employees) => {
   const html = [];

   html.push(
      ...employees.filter((employee) => employee.getRole() === 'Manager').map((manager) => renderManagerHTML(manager))
   );
   html.push(
      ...employees
         .filter((employee) => employee.getRole() === 'Engineer')
         .map((engineer) => renderEngineerHTML(engineer))
   );
   html.push(
      ...employees.filter((employee) => employee.getRole() === 'Intern').map((intern) => renderInternHTML(intern))
   );

   return renderMainHTML(html.join(''));
};

const renderManagerHTML = (manager) => {
   let template = fs.readFileSync(path.resolve(TEMPLATES_DIR, 'manager.html'), 'utf8');
   template = replacePlaceholders(template, 'name', manager.getName());
   template = replacePlaceholders(template, 'role', manager.getRole());
   template = replacePlaceholders(template, 'email', manager.getEmail());
   template = replacePlaceholders(template, 'id', manager.getId());
   template = replacePlaceholders(template, 'officeNumber', manager.getOfficeNumber());
   return template;
};

const renderEngineerHTML = (engineer) => {
   let template = fs.readFileSync(path.resolve(TEMPLATES_DIR, 'engineer.html'), 'utf8');
   template = replacePlaceholders(template, 'name', engineer.getName());
   template = replacePlaceholders(template, 'role', engineer.getRole());
   template = replacePlaceholders(template, 'email', engineer.getEmail());
   template = replacePlaceholders(template, 'id', engineer.getId());
   template = replacePlaceholders(template, 'github', engineer.getGithub());
   return template;
};

const renderInternHTML = (intern) => {
   let template = fs.readFileSync(path.resolve(TEMPLATES_DIR, 'intern.html'), 'utf8');
   template = replacePlaceholders(template, 'name', intern.getName());
   template = replacePlaceholders(template, 'role', intern.getRole());
   template = replacePlaceholders(template, 'email', intern.getEmail());
   template = replacePlaceholders(template, 'id', intern.getId());
   template = replacePlaceholders(template, 'school', intern.getSchool());
   return template;
};

const renderMainHTML = (html) => {
   const template = fs.readFileSync(path.resolve(TEMPLATES_DIR, 'main.html'), 'utf8');
   return replacePlaceholders(template, 'team', html);
};

const replacePlaceholders = (template, placeholder, value) => {
   const pattern = new RegExp('{{ ' + placeholder + ' }}', 'gm');
   return template.replace(pattern, value);
};

module.exports = renderHTML;
