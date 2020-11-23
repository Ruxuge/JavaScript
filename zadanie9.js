const pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var tab = pets.reduce(function(prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

console.log(JSON.stringify(tab));
