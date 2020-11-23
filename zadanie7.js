const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    sum(line);
});

function sum(numbers) {
   const result = numbers.toString()
       .split(' ')
       .map(Number)
       .reduce((a, b) => a + b, 0);

    console.log(result);
};