const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors/safe');
const createControllerService = require('./mvc/controller/generateController');

function validationController(routerMethod) {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'controllerOrNot',
        message: 'Do you want a controller associate?',
        choices: ['Yes', 'No'],
      },
    ])
    .then((answers) => {
      console.info(answers);
      if (!fs.existsSync('./controllers')) {
        return console.error(
          colors.red(
            `Please enter the command <npm run generate:mvc> before this action`
          )
        );
      } else if (answers.controllerOrNot == true) {
        createControllerService();
        fs.writeFile(`./routes/${process.argv[2]}.js`, routerMethod, (err) => {
          if (err) return console.log(err);
          return console.log(
            colors.green(`${process.argv[2]}.js file is created at ./routes`)
          );
        });
      } else {
        fs.writeFile(`./routes/${process.argv[2]}.js`, routerMethod, (err) => {
          if (err) return console.log(err);
          return console.log(
            colors.green(`${process.argv[2]}.js file is created at ./routes`)
          );
        });
      }
    });
}

module.exports = validationController;
