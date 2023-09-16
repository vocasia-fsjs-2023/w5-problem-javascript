var nama;
var nilai;

// Meminta pengajar memasukkan nama dan nilai mahasiswa secara manual
nama = prompt("Masukkan nama siswa:");
nilai = parseFloat(prompt("Masukkan nilai siswa (0-100):"));

// Memeriksa apakah nilai mahasiswa berada dalam rentang yang valid
if (nilai >= 0 && nilai <= 100) {
  // Menggunakan struktur percabangan untuk menentukan deskripsi nilai
  var deskripsiNilai;

  if (nilai >= 80 && nilai <= 100) {
    deskripsiNilai = "A";
  } else if (nilai >= 65 && nilai < 80) {
    deskripsiNilai = "B";
  } else if (nilai >= 50 && nilai < 65) {
    deskripsiNilai = "C";
  } else if (nilai >= 35 && nilai < 50) {
    deskripsiNilai = "D";
  } else {
    deskripsiNilai = "E";
  }

  // Menampilkan deskripsi nilai dan nama siswa
  console.log(`Nama siswa: ${nama}`);
  console.log(`Deskripsi nilai: ${deskripsiNilai}`);
} else {
  // Menampilkan pesan jika nilai tidak valid
  console.log("Nilai Invalid");
}
