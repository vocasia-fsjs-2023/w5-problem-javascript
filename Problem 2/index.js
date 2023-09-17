let name = "rifqi";
let money = 50000;
let age = 18;

if (name == "") {
  console.log("Anda Tidak Boleh Masuk");
} else {
  console.log(`Hallo ${name}`);
  if (age < 17) {
    console.log("Anda Hanya Boleh Meminum Jus");
    if (money >= 50000) {
      console.log(`Anda bisa pesan minum, sisa uang anda ${money - 50000}`);
    } else {
      console.log("Uang anda tidak cukup. Anda harus pulang");
    }
  } else {
    console.log("Anda Hanya Boleh Meminum Anggur");
    if (money >= 300000) {
      console.log(`Anda bisa pesan minum, sisa uang anda ${money - 300000}`);
    } else {
      console.log("Uang anda tidak cukup. Anda harus pulang");
    }
  }
}
