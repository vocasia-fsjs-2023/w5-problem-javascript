console.log("OUTPUT: ");
console.log("-------------------");

for (let i  = 1 ; i  <= 100; i += 3) {
    if (i % 2 === 0) {
        console.log(`${i} - genap`);
    }else {
        console.log(`${i} - ganjil`);
    };
};
// OUTPUT:
// --------
//   1 - ganjil
//   4 - genap
//   7 - ganjil
//   .
//   .
//   100 - genap

console.log("OUTPUT: ");
console.log("------------------");

for (let h = 50; h <= 200; h += 5) {
    if (h % 3 === 0) {
        console.log(`${h} - faktor 3`);
    }else {
        console.log(`${h} - tidak bisa dibagi 3`)
    };
};
// OUTPUT:
// --------
//    50 - tidak bisa dibagi 3
//    55 - tidak bisa dibagi 3
//    60 - faktor 3
//    .
//    .
//    195 - faktor 3
//    200 - tidak bisa dibagi 3

console.log("OUTPUT: ");
console.log("------------------");

for (let j = 100; j <= 200; j += 7) {
    if (j % 8 === 0) {
        console.log(` ${j}`)
    };   
};
// OUTPUT:
// --------
//    128
//    184

