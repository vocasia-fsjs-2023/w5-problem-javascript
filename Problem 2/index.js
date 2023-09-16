var name = "Delisha";
var age = 10; // Ubah usia sesuai dengan kebutuhan
var money = 1000000;

// Cek apakah nama kosong
if (name === " ") {
  console.log("Anda Tidak Boleh Masuk!");
} else {
  if (age < 17) {
    console.log("Hanya boleh memesan juice");
    var hargaMinuman = 50000; // Harga juice
  } else {
    console.log("Boleh memesan Anggur");
    var hargaMinuman = 300000; // Harga anggur
  }

  // Cek apakah uang mencukupi
  if (money >= hargaMinuman) {
    money -= hargaMinuman;
    console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
  } else {
    console.log("Uang tidak cukup. Anda harus pulang");
  }
}
