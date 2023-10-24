const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tampilkanDeskripsiNilai(nama, nilai) {
  if (nilai < 0 || nilai > 100) {
    console.log('Nilai Invalid');
  } else if (nilai >= 80) {
    console.log(`${nama}, Anda mendapatkan nilai A.`);
  } else if (nilai >= 65) {
    console.log(`${nama}, Anda mendapatkan nilai B.`);
  } else if (nilai >= 50) {
    console.log(`${nama}, Anda mendapatkan nilai C.`);
  } else if (nilai >= 35) {
    console.log(`${nama}, Anda mendapatkan nilai D.`);
  } else {
    console.log(`${nama}, Anda mendapatkan nilai E.`);
  }

  rl.close();
}

rl.question('Masukkan nama siswa: ', (namaSiswa) => {
  rl.question('Masukkan nilai siswa: ', (nilai) => {
    tampilkanDeskripsiNilai(namaSiswa, parseInt(nilai));
  });
});
