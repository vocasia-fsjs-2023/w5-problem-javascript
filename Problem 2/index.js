// Input data pengunjung
var name = "John";  // Ganti dengan nama pengunjung
var age = 18;       // Ganti dengan usia pengunjung
var money = 350000; // Ganti dengan jumlah uang yang dimiliki pengunjung

// Periksa apakah nama pengunjung kosong
if (name === "") {
    console.log("Anda tidak boleh masuk!");
} else {
    // Periksa usia pengunjung
    if (age < 17) {
        // Pengunjung berusia kurang dari 17 tahun, pesan juice
        var juicePrice = 50000;
        if (money >= juicePrice) {
            // Uang cukup untuk pesan juice
            money -= juicePrice;
            console.log("Anda bisa pesan juice. Sisa uang anda: " + money);
        } else {
            // Uang tidak cukup untuk pesan juice
            console.log("Uang tidak cukup. Anda harus pulang.");
        }
    } else {
        // Pengunjung berusia 17 tahun atau lebih, pesan anggur
        var winePrice = 300000;
        if (money >= winePrice) {
            // Uang cukup untuk pesan anggur
            money -= winePrice;
            console.log("Anda bisa pesan anggur. Sisa uang anda: " + money);
        } else {
            // Uang tidak cukup untuk pesan anggur
            console.log("Uang tidak cukup. Anda harus pulang.");
        }
    }
}
