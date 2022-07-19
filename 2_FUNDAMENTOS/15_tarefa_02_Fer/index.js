const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
  {name: 'nome', message: 'Seu nome:' },
  {name: 'idade', message: 'Sua idade:' },
  ])
  .then((answers) => {
    const resultado = `Seu nome é ${answers.nome} e tem ${answers.idade} anos`
    console.log(chalk.bgYellow.black(resultado))})
  .catch((err) => {console.log(err)})