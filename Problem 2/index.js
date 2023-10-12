var name = "Reyhan";
var age = 21;
var money = 550000;

if (name === "") {
  console.log("Anda tidak boleh masuk!");
} else {
  if (age < 17) {
    var drinkPrice = 50000;
    if (money < drinkPrice) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      money -= drinkPrice;
      console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
    }
  } else {
    var drinkPrice = 300000;
    if (money < drinkPrice) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      money -= drinkPrice;
      console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
    }
  }
}
