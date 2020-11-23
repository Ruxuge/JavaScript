const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    taker(line);
});

function taker(text){
    var tab = text.split(' ');
    var a = tab[0];
    var b = tab[1];

    characterRange(a,b);
}
    

function characterRange(a, b) {
    if (a < b){
        console.log(a);
        a = a+1;
        characterRange(a, b);
    }
}