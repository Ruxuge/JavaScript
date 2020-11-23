const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    powerOf(line);
});

function powerOf(numbers) {
    const power = numbers.toString()
        .split(' ')
        .map(x => ((x * x).toFixed(2)))
        .filter(number => isInt(number));

    console.log(power);
}

function isInt(value) {
    if (isNaN(value)) {
        return false;
    }
    const x = parseFloat(value);
    return (x | 0) === x;
}