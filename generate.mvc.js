const inquirer = require('inquirer');

const generateMVCArchitecture = require('./mvc/init.js');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'architecture',
      message: 'Which architecture do you want?',
      choices: ['MVC'],
    },
  ])
  .then((answers) => {
    console.info(answers);
    if (answers.architecture === 'MVC') {
      generateMVCArchitecture();
    }
  });
