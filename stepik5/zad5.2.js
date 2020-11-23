const readline = require('readline');
const path = require('path');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {

    const dir = input;
    const files = fs.readdirSync(dir)

for (const file of files) {
    const stat = fs.lstatSync(path.join(dir, file));
    console.log(stat);
}

  rl.close();
});


