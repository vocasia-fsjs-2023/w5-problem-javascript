// Data pengunjung
var visitor = {
    name: "Jamil", // Ganti dengan nama pengunjung
    age: 18, // Ganti dengan usia pengunjung
    money: 350000 // Ganti dengan jumlah uang pengunjung
  };
  
  // Step 1: Periksa jika name kosong
  if (visitor.name === "") {
    console.log("Anda tidak boleh masuk!");
  } else {
    // Step 2: Periksa umur dan pesanan minuman
    var drinkPrice = 0;
  
    if (visitor.age < 17) {
      drinkPrice = 50000; // Harga juice
    } else {
      drinkPrice = 300000; // Harga anggur
    }
  
    // Step 3: Periksa jika uang mencukupi
    if (visitor.money < drinkPrice) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      // Step 4: Pesan minuman dan hitung sisa uang
      visitor.money -= drinkPrice;
      console.log("Anda bisa pesan minum. Sisa uang anda: " + visitor.money);
    }
  }
  