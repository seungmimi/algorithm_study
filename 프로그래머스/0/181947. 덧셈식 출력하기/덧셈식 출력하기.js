const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    console.log(`${input[0]} + ${input[1]} = ${parseInt(input[0])+parseInt(input[1])}`)
})