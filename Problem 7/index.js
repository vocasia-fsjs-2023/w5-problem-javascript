// Tugas 1 : Mengecek Ganjil/Genap dari 1-100
console.log("------");
console.log("OUTPUT TUGAS 1:");
console.log("------");
for (let i = 1; i <= 100; i += 3) {
  if (i % 2 === 0) {
    console.log(i + " - genap");
  } else {
    console.log(i + " - ganjil");
  }
}

// Tugas 2 : Mengecek Faktor 3 dari 50-200
console.log("------");
console.log("OUTPUT TUGAS 2:");
console.log("------");
for (let i = 50; i <= 200; i += 5) {
  if (i % 3 === 0) {
    console.log(i + " - faktor 3");
  } else {
    console.log(i + " - tidak bisa dibagi 3");
  }
}

// Tugas 3 : Mengecek Angka yang Habis Dibagi 8 dari 100-200
console.log("------");
console.log("OUTPUT TUGAS 3:");
console.log("------");

for (let i = 100; i <= 200; i += 7) {
  if (i % 8 === 0) {
    console.log(i);
  }
}
