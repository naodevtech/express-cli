const fs = require('fs');
const colors = require('colors/safe');
const controllerAsync = `const models = require('../models')\n\nmodule.exports = {\n\t// this is an example of method that can be written below\n\tregister: async (request, response) => {\t}\n};`;

function createControllerService() {
  fs.writeFile(
    `./controllers/${process.argv[2]}.js`,
    controllerAsync,
    (err) => {
      if (err) return err;
      return console.log(
        colors.green(
          `${process.argv[2]}.js file is created at ./controllers associate to route ${process.argv[2]}.js`
        )
      );
    }
  );
}

module.exports = createControllerService;
