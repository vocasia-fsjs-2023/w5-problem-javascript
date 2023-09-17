var nama = "Adhi Pamungkas Wijayadi";
var nilai = 86;

if (nilai >= 0 && nilai <= 34) {
  console.log("Nama Anda: " + nama);
  console.log("Nilai Anda: E");
} else if (nilai >= 35 && nilai <= 49) {
  console.log("Nama Anda: " + nama);
  console.log("Nilai Anda: D");
} else if (nilai >= 50 && nilai <= 64) {
  console.log("Nama Anda: " + nama);
  console.log("Nilai Anda: C");
} else if (nilai >= 65 && nilai <= 79) {
  console.log("Nama Anda: " + nama);
  console.log("Nilai Anda: B");
} else if (nilai >= 80 && nilai <= 100) {
  console.log("Nama Anda: " + nama);
  console.log("Nilai Anda: A");
} else {
  console.log("Nilai tidak valid");
  process.exit();
}
