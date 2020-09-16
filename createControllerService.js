const fs = require('fs');
const colors = require('colors/safe');

function createControllerService(controllerMethod) {
  fs.writeFile(
    `../controllers/${process.argv[2]}Controller.js`,
    controllerMethod,
    (err) => {
      if (err) return console.log(err);
      console.log(
        colors.green(
          `${process.argv[2]}Controller.js file is created at ./controllers`
        )
      );
    }
  );
}

module.exports = createControllerService;
