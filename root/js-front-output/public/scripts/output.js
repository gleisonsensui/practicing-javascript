const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({input, output});

rl.question('Qual o seu nome?', (resposta) => {
    console.log(`Ola, ${resposta}`)
    rl.close();
})
