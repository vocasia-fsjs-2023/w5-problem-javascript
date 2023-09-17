var nama;
var nilai;


nama = prompt("Masukkan nama mahasiswa: ");
nilai = parseInt(prompt("Masukkan nilai mahasiswa: "));


if (nilai < 0 || nilai > 100) {
 
  console.log("Nilai Invalid");
} else {
  if (nilai >= 90) {
    deskripsi = "A";
  } else if (nilai >= 80) {
    deskripsi = "B";
  } else if (nilai >= 70) {
    deskripsi = "C";
  } else if (nilai >= 60) {
    deskripsi = "D";
  } else {
    deskripsi = "E";
  }

  console.log(nama + " Nilai: " +nilai + "Keterangan" +deskripsi);
}
