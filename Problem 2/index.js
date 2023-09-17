var name = "Lorem Ipsum"; 
var age = 17; 
var money = 150000;

const juice = 50000;
const anggur = 300000;

if (name === "") {
    console.log("Anda tidak boleh masuk!");
} else if (age <= 17 && money >= juice) {
    money -= juice;
    console.log("Anda bisa pesan juice. Sisa uang anda: " + money);
} else if (money >= anggur){
    money -= anggur; 
    console.log("Anda bisa pesan anggur. Sisa uang anda: " + money);
} else if (money < juice || money < anggur){
    console.log("Uang tidak cukup. Anda harus pulang.");
} else {
    console.log("Data Invalid");
}