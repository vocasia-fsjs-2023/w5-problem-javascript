/* 1.Buatlah sebuah loop untuk mengecek setiap 3 angka dari 1-100, lalu cetak angka tersebut dan menuliskan 
apakah bilangan tersebut ganjil atau genap */
console.log("1. Mengecek Ganjil/Genap dari 1-100");
console.log("--------");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " - genap");
  } else {
    console.log(i + " - ganjil");
  }
}

/*2.Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan 
apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan. */
console.log("Mengecek Faktor 3 dari 50-200");
console.log("--------");
for (let i = 50; i <= 200; i += 5) {
  if (i % 3 === 0) {
    console.log(i + " - faktor 3");
  } else {
    console.log(i + " - tidak bisa dibagi 3");
  }
}

/* buatlah loop untuk mengecek setiap 7 angka dari 100-200, dan hanya cetak angka tersebut bila angkanya 
habis dibagi 8. */
console.log("Mengecek Angka Habis Dibagi 8 dari 100-200");
console.log("--------");
for (let i = 100; i <= 200; i += 7) {
  if (i % 8 === 0) {
    console.log(i);
  }
}
