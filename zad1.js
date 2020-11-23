const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    filter(line);
});
// const string = "1 2 3 4 5";

function filter(text){
    const result = text.toString().split(' ').map(Number).filter(item => item %2 === 0)
    console.log(result);
}