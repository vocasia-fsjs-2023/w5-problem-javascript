var nama = "Uti Tiyanum";
var nilai = 75;

if (nilai < 0 || nilai > 100 || isNaN(nilai)) {
  console.log("Nilai Invalid");
} else {

  let descNilai;
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

  console.log(`Nama Siswa: ${nama}`);
  console.log(`Desc Nilai: ${descNilai}`);
}
