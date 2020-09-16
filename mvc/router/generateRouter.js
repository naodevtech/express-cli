const fs = require('fs');
const colors = require('colors/safe');
const validationController = require('../../generate.controller');

function CreateRouterService(routerMethod) {
  if (process.argv[2] === undefined) {
    return console.log(colors.red('Sorry enter name of file'));
  }
  if (fs.existsSync(`./routes/${process.argv[2]}.js`)) {
    return console.error(
      colors.red(
        `Sorry the route and the controller ${process.argv[2]} already exist!`
      )
    );
  }
  validationController(routerMethod);
}

module.exports = CreateRouterService;
