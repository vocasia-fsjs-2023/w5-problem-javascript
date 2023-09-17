const name = "";
const age = 167;
let money = 500000;

if (name === "") {
  console.log("Anda tidak boleh masuk!");
  process.exit(1);
}

if (age < 17) {
  console.log("Anda hanya boleh memesan juice");
  money -= 50000;
} else {
  console.log("Ana boleh memesan anggur");
  money -= 300000;
}

if (money < 0) {
  console.log("Uang tidak cukup. Anda harus pulang");
} else {
  console.log("Anda bisa pesan minum. Sisa uang anda: Rp " + money);
}
