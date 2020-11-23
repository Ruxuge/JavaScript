const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const path = input;
  checker(path);
  rl.close();
});

const fs = require('fs')

function checker(path){
try {
    if (fs.existsSync(path)) {
        console.log("File exist");
    }else{
        console.log("File in not existing")
    }
}
    catch(err) {
        console.error(err)
}
}
