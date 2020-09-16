const fs = require('fs');
const colors = require('colors/safe');

function generateRouterDirectorie() {
  if (fs.existsSync('./routes')) {
    return console.error(colors.yellow('Folder ./routes already exist ! '));
  }
  fs.mkdir('./routes', (err) => {
    if (err) console.error(err);
    console.log(colors.green('New directory ./routes successfully created'));
  });
}

function generateModelDirectorie() {
  if (fs.existsSync('./models')) {
    return console.error(colors.yellow('Folder ./models already exist ! '));
  }
  fs.mkdir('./models', (err) => {
    if (err) console.error(err);
    console.log(colors.green('New directory /.models successfully created'));
  });
}

function generateControllerDirectorie() {
  if (fs.existsSync('./controllers')) {
    return console.error(
      colors.yellow('Folder ./controllers already exist ! ')
    );
  }
  fs.mkdir('./controllers', (err) => {
    if (err) console.error(err);
    console.log(
      colors.green('New directory ./controllers successfully created')
    );
  });
}

function generateServiceDirectorie() {
  if (fs.existsSync('./services')) {
    return console.error(colors.yellow('Folder ./services already exist ! '));
  }
  fs.mkdir('./services', (err) => {
    if (err) console.error(err);
    console.log(colors.green('New directory /.services successfully created'));
  });
}

function generateUtilitiesDirectorie() {
  if (fs.existsSync('./utils')) {
    return console.error(colors.yellow('Folder ./services already exist ! '));
  }
  fs.mkdir('./utils', (err) => {
    if (err) console.error(err);
    console.log(colors.green('New directory /.services successfully created'));
  });
}

function generateMVCArchitecture() {
  generateRouterDirectorie();
  generateModelDirectorie();
  generateControllerDirectorie();
  generateServiceDirectorie();
  generateUtilitiesDirectorie();
}
module.exports = generateMVCArchitecture;
