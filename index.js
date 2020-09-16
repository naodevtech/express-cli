const prompt = require('prompt');
const colors = require('colors/safe');
const fs = require('fs');
const CreateRouterService = require('./createRoutersService');
const createControllerService = require('./createControllerService');

const routerSync = `const express = require('express')\n\nconst ${process.argv[2]}Router = express.Router()\n\n${process.argv[2]}Router.get('/${process.argv[2]}', (request,response) => {\n\tresponse.send('Route ${process.argv[2]} works !');\n});\n\n module.exports = ${process.argv[2]}Router;`;
const routerAsync = `const express = require('express')\n\nconst ${process.argv[2]}Router = express.Router()\n\n${process.argv[2]}Router.get('/${process.argv[2]}', async (request,response) => {\n\tawait response.send('Route ${process.argv[2]} works !');\n});\n\n module.exports = ${process.argv[2]}Router;`;
const controllerAsync = `const models = require('../models')\n\nmodule.exports = {\n\t// this is an example of method that can be written below\n\tregister: async (request, response) => {\t}\n};`;
const controllerSync = ``;

let routerMethod = ``;
controllerMethod = [
  `const models = require('../models')\n\nmodule.exports = {\n\t// this is an example of method that can be written below\n\tregister: (request, response) => {\t}\n};`,
  `const models = require('../models')\n\nmodule.exports = {\n\t// this is an example of method that can be written below\n\tregister: async (request, response) => {\t}\n};`,
];

function promptStarted() {
  prompt.start();
  console.log(
    colors.bgGreen("Please, chose a method 'Async' or 'Sync' for your router")
  );
  prompt.get(['method'], function (err, result) {
    if (err) return err;
    else if (result.method == 'Sync' || 'sync') {
      routerMethod = routerSync;
      createControllerService(controllerMethod[0]);
      return CreateRouterService(routerMethod);
    } else if (result.method === 'Async' || 'async') {
      routerMethod = routerAsync;
      createControllerService(controllerMethod[1]);
      return CreateRouterService(routerMethod);
    }
  });
}
promptStarted();

module.exports = promptStarted;
