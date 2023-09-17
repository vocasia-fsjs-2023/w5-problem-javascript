var name = "Celi";
var age = 17;
var money = 1000000;

var juice = 50000;
var anggur = 300000;

if (name === " ") {
  console.log("Anda tidak boleh masuk!");
} else {
  if (age < 17 && money >= juice) {
    console.log("Hanya boleh memesan juice");
    console.log(`Anda bisa pesan minum. Sisa uang anda: ${money - juice}`);
  } else if (age >= 17 && money >= anggur) {
    console.log("Hanya boleh memesan anggur");
    console.log(`Anda bisa pesan minum. Sisa uang anda: ${money - anggur}`);
  } else {
    console.log("Uang tidak cukup. Anda harus pulang.");
  }
}
