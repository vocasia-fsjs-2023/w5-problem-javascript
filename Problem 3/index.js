var nama = "Rifqi";
var nilai = 79;

if (nilai < 0) {
  console.log("Nilai Invalid");
} else if (nilai > 100) {
  console.log("Nilai Invalid");
} else if (nilai >= 0 && nilai <= 34) {
  console.log("Nilai " + nama + " adalah E");
} else if (nilai > 34 && nilai <= 49) {
  console.log("Nilai " + nama + " adalah D");
} else if (nilai > 49 && nilai <= 64) {
  console.log("Nilai " + nama + " adalah C");
} else if (nilai > 64 && nilai <= 79) {
  console.log("Nilai " + nama + " adalah B");
} else if (nilai > 79 && nilai <= 100) {
  console.log("Nilai " + nama + " adalah A");
}
