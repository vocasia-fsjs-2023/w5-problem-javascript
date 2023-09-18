var nama = 'azhar';
var nilai = 90;

let descNilai = "";

if (nilai >= 80 && nilai <= 100){
  descNilai = "A";
} else if (nilai >= 65 && nilai <= 79){
  descNilai = "B";
} else if (nilai >= 50 && nilai <= 64){
  descNilai = "C";
} else if (nilai >= 35 && nilai <= 49){
  descNilai = "D";
} else if (nilai >= 0 && nilai <= 34){
  descNilai = "E";
} else {
  descNilai = "Nilai Invalid";
}

console.log(`Nama Mahasiswa: ${nama}`);
console.log(`Deskripsi Nilai: ${descNilai}`);