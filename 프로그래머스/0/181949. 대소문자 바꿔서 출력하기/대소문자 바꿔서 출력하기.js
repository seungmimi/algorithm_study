const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split("").map(e => {
        return /^[A-Z]+$/.test(e) ? e.toLowerCase() : e.toUpperCase();
    })
    console.log(input.join(""))
    
})