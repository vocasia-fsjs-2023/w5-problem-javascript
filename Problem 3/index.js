const nama = Alfa;
const nilai = 78;

function predikatNilai(nilai) {
  if (nilai >= 80 && nilai <= 100) {
    return 'A';
  } else if (nilai >= 65 && nilai <= 79) {
    return 'B';
  } else if (nilai >= 50 && nilai <= 64) {
    return 'C';
  } else if (nilai >= 35 && nilai <= 49) {
    return 'D';
  } else if (nilai >= 0 && nilai <= 34) {
    return 'E';
  } else {
    return 'Nilai Invalid';
  }
}

const deskripsi = predikatNilai(nilai);

if (deskripsi === 'Nilai Invalid') {
  console.log('Nilai Invalid');
} else {
  console.log(Nama Siswa: ${nama});
  console.log(Deskripsi Nilai: ${predikatNilai});
}