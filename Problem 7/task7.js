//1. Loop untuk mengecek bilangan ganjil atau genap pada rentang 1-100
console.log("OUTPUT:");
console.log("--------");

for (let i = 1; i <= 100; i += 3) {
  if (i % 2 === 0) {
    console.log(i + " - genap");
  } else {
    console.log(i + " - ganjil");
  }
}

//2. Loop untuk mengecek faktor perkalian 3 pada rentang 50-200
console.log("OUTPUT:");
console.log("--------");

for (let i = 50; i <= 200; i += 5) {
  if (i % 3 === 0) {
    console.log(i + " - faktor 3");
  } else {
    console.log(i + " - tidak bisa dibagi 3");
  }
}

//3. Loop untuk mengecek bilangan habis dibagi 8 pada rentang 100-200
console.log("OUTPUT:");
console.log("--------");

for (let i = 100; i <= 200; i += 7) {
  if (i % 8 === 0) {
    console.log(i);
  }
}
