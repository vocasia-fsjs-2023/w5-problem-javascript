// Input nilai
var nama = "Jae"; // nama siswa
var nilai = 78; // nilai siswa


// Inisialisasi variabel grade dengan nilai default
var grade = "Nilai Invalid";

// Cek nilai berada dalam rentang yang valid
if (nilai >= 0 && nilai <= 100) {
  // Memeriksa rentang nilai
  if (nilai >= 80 && nilai <= 100) {
    grade = "A";
  } else if (nilai >= 65 && nilai <= 79) {
    grade = "B";
  } else if (nilai >= 50 && nilai <= 64) {
    grade = "C";
  } else if (nilai >= 35 && nilai <= 49) {
    grade = "D";
  } else {
    grade = "E";
  }
}

// Menampilkan hasil
console.log("Nama : " + nama);
console.log("Nilai : " + nilai);
console.log("Grade : " + grade);
