# Express-cli

A future node_modules package to easer the creation of pattern, routes and controllers for NodeJS APIs

<img src="https://github.com/naodevtech/express-cli/blob/master/mockup/express_cli_mockup.png" />

## Installation

Clone the directory and put it in your project directly at the root and inside the module type 

```bash
npm install || npm i 
```

Add these two lines in the "scripts" object inside your package.json project

```bash
"generate:pattern": "node ./express-cli/generate.mvc.js",
"generate:router": "node ./express-cli/generate.router.js"
```

## Usage

```python
npm run generate:pattern
npm run generate:router yourNameRoute
```
## Coming soon

Feature with possibility to choose between several patterns

Feature with the possibility of choosing which type of route we want (GET, POST, DELETE or PUT)

Feature with possibility of setting up error management automatically via the CLI
