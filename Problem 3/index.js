var nama = "Wilbert Chandra"; // Ganti dengan nama siswa yang diinginkan
var nilai = 55; // Ganti dengan nilai siswa yang diinginkan

if (nilai < 0 || nilai > 100) {
  console.log("Nilai Invalid");
} else {
  var deskripsiNilai;

  if (nilai >= 80 && nilai <= 100) {
    deskripsiNilai = "A";
  } else if (nilai >= 65 && nilai <= 79) {
    deskripsiNilai = "B";
  } else if (nilai >= 50 && nilai <= 64) {
    deskripsiNilai = "C";
  } else if (nilai >= 35 && nilai <= 49) {
    deskripsiNilai = "D";
  } else {
    deskripsiNilai = "E";
  }

  console.log("Nama siswa: " + nama);
  console.log("Deskripsi nilai: " + deskripsiNilai);
}
