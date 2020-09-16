const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors/safe');
const CreateRouterService = require('./mvc/router/generateRouter');

const routerAsync = `const express = require('express')\n\nconst ${process.argv[2]}Router = express.Router()\n\n${process.argv[2]}Router.get('/${process.argv[2]}', async (request,response) => {\n\tawait response.send('Route ${process.argv[2]} works !');\n});\n\n module.exports = ${process.argv[2]}Router;`;
const routerSync = `const express = require('express')\n\nconst ${process.argv[2]}Router = express.Router()\n\n${process.argv[2]}Router.get('/${process.argv[2]}', (request,response) => {\n\tresponse.send('Route ${process.argv[2]} works !');\n});\n\n module.exports = ${process.argv[2]}Router;`;

inquirer
  .prompt([
    {
      type: 'list',
      name: 'router',
      message: 'Which method router do you want?',
      choices: ['Asynchrone', 'Synchrone'],
    },
  ])
  .then((answers) => {
    if (!fs.existsSync('./routes')) {
      return console.error(
        colors.red(
          `Please enter the command <npm run generate:mvc> before this action`
        )
      );
    } else if (answers.router === 'Asynchrone') {
      CreateRouterService(routerAsync);
    } else if (answers.router === 'Synchrone') {
      CreateRouterService(routerSync);
    }
  });
