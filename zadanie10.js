let element = func([ 'Ala', 'Kot', 'Pies' ],  y => y === 'Ala');

console.log(element); // ‘Ala’

function func(nameArray, callback) {
    return nameArray.map(y => y).filter(callback);
}