
//soal nomor 1
for (var angka = 1; angka <= 100; angka += 3) {
    if (angka % 2 === 0) {
        console.log(angka + " - genap");
    } else {
        console.log(angka + " - ganjil");
    }
}

//soal nomor 2

var angka = 50;
while (angka <= 200) {
    if (angka % 3 === 0) {
        console.log(angka + " - faktor 3");
    } else {
        console.log(angka + " - tidak bisa dibagi 3");
    }
    angka += 5;
}

//soal nomor 3

for (var angka = 100; angka <= 200; angka += 7) {
    if (angka % 8 === 0) {
        console.log(angka);
    }
}


