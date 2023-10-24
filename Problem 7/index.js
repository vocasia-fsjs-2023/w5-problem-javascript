console.log("1. Bilangan genap atau ganjil dari 1 hingga 100");
console.log("--------");
for (let i = 1; i <= 100; i += 3) {
  if (i % 2 === 0) {
    console.log(i + " - genap");
  } else {
    console.log(i + " - ganjil");
  }
}

console.log("\n2. Faktor perkalian 3 dari 50 hingga 200");
console.log("--------");
for (let i = 50; i <= 200; i += 5) {
  if (i % 3 === 0) {
    console.log(i + " - faktor 3");
  } else {
    console.log(i + " - tidak bisa dibagi 3");
  }
}

console.log("\n3. Angka yang habis dibagi 8 dari 100 hingga 200");
console.log("--------");
for (let i = 100; i <= 200; i += 7) {
  if (i % 8 === 0) {
    console.log(i);
  }
}
