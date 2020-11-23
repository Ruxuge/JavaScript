const arr = [
    { key: 0, x: [4,5,6], y: [1,2,3,4]},
    { key: 0, x: [1], y: [] }
]

const arrs = arr.map(ar =>  ar.x.length + ar.y.length);
console.log(
    arrs.reduce((a, b) => a + b, 0)
)
