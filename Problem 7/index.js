//bilangan ganjil atau genap.
console.log("OUTPUT:");
console.log("----------------");
for (let a = 1; a <= 100; a += 3) {
  if (a % 2 == 0) {
    console.log(a + "- Genap");
  } else {
    console.log(a + "- Ganjil");
  }
}

//bilangan  faktor perkalian 3 atau bukan.
console.log("OUTPUT:");
console.log("----------------");
for (let a = 50; a <= 200; a += 5) {
  if (a % 3 == 0) {
    console.log(a + "- Faktor 3");
  } else {
    console.log(a + "- Tidak bisa dibagi 3");
  }
}

//cetak angka apabila angkanya habis dibagi 8.
console.log("OUTPUT:");
console.log("----------------");
for (let a = 100; a <= 200; a += 7) {
  if (a % 8 === 0) {
    console.log(a);
  }
}
