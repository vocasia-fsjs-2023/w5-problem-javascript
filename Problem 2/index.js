var pengunjung = {
  name: "Budi", 
  age: 10, 
  money: 500000,
};

// Cek apakah name kosong
if (pengunjung.name === "") {
  console.log("Anda tidak boleh masuk!");
} else {
  // Cek usia pengunjung
  if (pengunjung.age < 17) {
    // Pengunjung di bawah 17 tahun hanya bisa pesan juice
    if (pengunjung.money < 50000) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      pengunjung.money -= 50000; // Mengurangkan uang untuk membeli juice
      console.log("Anda bisa pesan minum. Sisa uang anda: " + pengunjung.money);
    }
  } else {
    // Pengunjung 17 tahun ke atas hanya bisa pesan anggur
    if (pengunjung.money < 300000) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      pengunjung.money -= 300000; // Mengurangkan uang untuk membeli anggur
      console.log("Anda bisa pesan minum. Sisa uang anda: " + pengunjung.money);
    }
  }
}
