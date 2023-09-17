// Buatlah sebuah loop untuk mengecek setiap 3 angka dari 1-100, lalu cetak angka tersebut dan menuliskan apakah bilangan tersebut ganjil atau genap.
for (let angka = 1; angka <= 100; angka++) {
    if (angka % 2 === 0) {
      console.log(angka + " adalah angka genap");
    } else {
      console.log(angka + " adalah angka ganjil");
    }
  }

// Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan.
for (let angka = 50; angka <= 200; angka += 5) {
    if (angka % 3 === 0) {
      console.log(angka + " adalah faktor perkalian 3");
    } else {
      console.log(angka + " bukan faktor perkalian 3");
    }
  }

// buatlah loop untuk mengecek setiap 7 angka dari 100-200, dan hanya cetak angka tersebut bila angkanya habis dibagi 8.
for (let angka = 100; angka <= 200; angka += 7) {
    if (angka % 8 === 0) {
      console.log(angka);
    }
  }
