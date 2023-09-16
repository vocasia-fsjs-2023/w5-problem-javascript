//firda ayu hassanah - full stack 2

// Membuat objek customer
var customer = {
  name: "John", // nama customer
  age: 10, // usia customer
  money: 500000, // jumlah uang customer
};

// Cek apakah name kosong
if (customer.name === "") {
  console.log("Anda tidak boleh masuk!");
} else {
  // Cek usia customer
  if (customer.age < 17) {
    // customer di bawah 17 tahun hanya bisa pesan juice
    if (customer.money < 50000) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      customer.money -= 50000; // Mengurangkan uang untuk membeli juice
      console.log("Anda bisa pesan minum. Sisa uang anda: " + customer.money);
    }
  } else {
    // customer 17 tahun ke atas hanya bisa pesan anggur
    if (customer.money < 300000) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      customer.money -= 300000; // Mengurangkan uang untuk membeli anggur
      console.log("Anda bisa pesan minum. Sisa uang anda: " + customer.money);
    }
  }
}
