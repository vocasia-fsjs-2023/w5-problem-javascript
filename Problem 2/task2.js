// Deklarasi variabel pengunjung,juice dan anggur
let name = "Radja"; 
let age = 17; 
let money = 50000; 
const juice = 50000;
const anggur = 300000;

// Langkah 1: Mengecek nama pengunjung
if (name === "") {
  console.log("Anda tidak boleh masuk!");
// Langkah 2: Mengecek umur dan uang pengunjung (<17)
} else if (age <= 17 && money >= juice) {
  money -= juice;
  console.log("Anda bisa pesan juice. Sisa uang anda: " + money);
// Langkah 3: Mengecek umur dan uang pengunjung (>17)
} else if (money >= anggur){
  money -= anggur; 
  console.log("Anda bisa pesan anggur. Sisa uang anda: " + money);
// Langkah 4: Mengecek uang pengunjung
} else if (money < juice || money < anggur){
  console.log("Uang tidak cukup. Anda harus pulang.");
} else {
  console.log("Data tidak valid");
}