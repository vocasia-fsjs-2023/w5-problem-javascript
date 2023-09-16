// Deklarasi variable pengunjung
let name = "Leonardo"; 
let age = 21; 
let money = 600000; 

// Memeriksa apakah nama pengunjung kosong
if (name === "") {
  console.log("Anda tidak boleh masuk!");
} else {
  // Memeriksa usia pengunjung dan memesan minuman
  let minuman;
  let hargaMinuman;

  if (age < 17) {
    minuman = "juice";
    hargaMinuman = 50000;
  } else {
    minuman = "anggur";
    hargaMinuman = 300000;
  }

  // Memeriksa apakah uang cukup untuk memesan minuman
  if (money < hargaMinuman) {
    console.log("Uang Anda tidak cukup. Anda harus pulang.");
  } else {
    // Menghitung sisa uang dan menampilkan pesan
    money -= hargaMinuman;
    console.log(`Anda bisa pesan minuman. Sisa uang anda: ${money}`);
  }
}
