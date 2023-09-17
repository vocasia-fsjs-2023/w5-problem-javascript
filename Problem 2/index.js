// Mendefinisikan variabel pengunjung
var name = "John"; // Ganti dengan nama pengunjung
var age = 18; // Ganti dengan usia pengunjung
var money = 350000; // Ganti dengan jumlah uang pengunjung

// Step 1: Memeriksa apakah name kosong
if (name === "") {
  console.log("Anda tidak boleh masuk!");
} else {
  // Step 2: Memeriksa usia pengunjung
  if (age < 17) {
    // Pengunjung di bawah 17 tahun hanya boleh memesan juice
    if (money >= 50000) {
      money -= 50000; // Mengurangkan uang dengan harga juice
      console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
    } else {
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  } else {
    // Pengunjung 17 tahun ke atas hanya boleh memesan anggur
    if (money >= 300000) {
      money -= 300000; // Mengurangkan uang dengan harga anggur
      console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
    } else {
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  }
}
