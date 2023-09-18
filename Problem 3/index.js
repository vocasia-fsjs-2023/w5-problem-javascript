var nama = "eri"
var nilai = 20

if (nilai <= 100 && nilai >= 80) {
  grade = 'A';
} else if (nilai >= 65 && nilai <= 79) {
  grade = 'B';                       
} else if (nilai >= 50 && nilai <= 64) {
  grade = 'C';                       
} else if (nilai >= 35 && nilai <= 49) {                       
  grade = 'D';
} else if (nilai >= 0 && nilai <= 34 ) {
  grade = 'E';
} else{
  grade = 'x';
};

console.log("nama mahasiswa : " +nama);
console.log("nilai mahasiswa : " +nilai);
console.log("grade mahasiswa : " +grade);
