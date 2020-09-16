const fs = require('fs');
const colors = require('colors/safe');

function CreateRouterService(routerMethod) {
  if (process.argv[2] === undefined) {
    return console.log(colors.red('Sorry enter name of file'));
  } else if (fs.existsSync(`../routes/${process.argv[2]}.js`)) {
    return console.error(
      colors.red(
        `Sorry the route and the controller ${process.argv[2]} already exist!`
      )
    );
  }
  fs.writeFile(`../routes/${process.argv[2]}.js`, routerMethod, (err) => {
    if (err) return console.log(err);
    console.log(
      colors.green(`${process.argv[2]}.js file is created at ./routes`)
    );
  });
}
module.exports = CreateRouterService;
