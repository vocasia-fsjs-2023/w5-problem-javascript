console.log("cek Ganjil/Genap:");
for (var i = 1; i <= 100; i += 3) {
  if (i % 2 === 0) {
    console.log(i + " - genap");
  } else {
    console.log(i + " - ganjil");
  }
}

console.log("\ncek Faktor Perkalian 3:");
for (var i = 50; i <= 200; i += 5) {
  if (i % 3 === 0) {
    console.log(i + " - faktor 3");
  } else {
    console.log(i + " - tidak bisa dibagi 3");
  }
}

console.log("\ncek Habis Dibagi 8:");
for (var i = 100; i <= 200; i += 7) {
  if (i % 8 === 0) {
    console.log(i);
  }
}
