// Minta pengajar untuk memasukkan nama dan nilai
const nama = prompt("Masukkan nama siswa:");
const nilai = parseInt(prompt("Masukkan nilai ujian:"));

// Lakukan pengecekan kondisi
if (nilai >= 0 && nilai <= 100) {
  if (nilai >= 80 && nilai <= 100) {
    console.log(`Nama siswa: ${nama}, Nilai: ${nilai}, Deskripsi: A`);
  } else if (nilai >= 65 && nilai < 80) {
    console.log(`Nama siswa: ${nama}, Nilai: ${nilai}, Deskripsi: B`);
  } else if (nilai >= 50 && nilai < 65) {
    console.log(`Nama siswa: ${nama}, Nilai: ${nilai}, Deskripsi: C`);
  } else if (nilai >= 35 && nilai < 50) {
    console.log(`Nama siswa: ${nama}, Nilai: ${nilai}, Deskripsi: D`);
  } else {
    console.log(`Nama siswa: ${nama}, Nilai: ${nilai}, Deskripsi: E`);
  }
} else {
  console.log(`Nama siswa: ${nama}, Nilai: ${nilai}, Deskripsi: Nilai Invalid`);
}
