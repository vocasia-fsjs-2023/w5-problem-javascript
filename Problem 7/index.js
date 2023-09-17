for (let i = 1; i < 101; i += 3) {
    const isEven = i % 2 === 0;
    console.log(`${i} - ${isEven ? "genap" : "ganjil"}`);
}

for (let i = 50; i < 201; i += 5) {
    const isFaktorTiga = i % 3 === 0 ? "faktor 3" : "tidak bisa dibagi";
    console.log(i + " - " + isFaktorTiga);
}

for (let i = 100; i < 201; i += 7) {
    if (i % 8 == 0) console.log(i)
}

var i = 1;
while (i <= 100) {
    i % 2 === 0 ? console.log(`${i} - genap`) : console.log(`${i} - ganjil`);
    i += 3;
}

var i = 50;
while (i <= 200) {
    i % 3 !== 0 ? console.log(`${i} - tidak bisa dibagi 3`) : console.log(`${i} - faktor 3`)
    i += 5
}

var i = 100;
while (i <= 200) {
    i % 8 === 0 ? console.log(i) : ""
    i += 7;
}