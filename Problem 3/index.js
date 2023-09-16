var nama = "Leonardo Ephraim";
var nilai = 70;
var descNilai;

if (nilai >= 0 && nilai <= 100) {
  
  if (nilai >= 80 && nilai <= 100) {
    descNilai = "A";
  } else if (nilai >= 65 && nilai < 80) {
    descNilai = "B";
  } else if (nilai >= 50 && nilai < 65) {
    descNilai = "C";
  } else if (nilai >= 35 && nilai < 50) {
    descNilai = "D";
  } else {
    descNilai = "E";
  }
  
  console.log(`Nama siswa: ${nama}`);
  console.log(`Nilai : ${nilai}`);
  console.log(`Deskripsi nilai: ${descNilai}`);
} else {
  
  console.log("Nilai Invalid");
}
