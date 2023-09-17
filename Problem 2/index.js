var name = "Andreas";
var age = 17;
var money = 100000;

if (name !== "") {
    var juice = 50000;
    var anggur = 300000;

    if (money >= juice && money >= anggur) {
        if (age < 17) {
            console.log(`Anda bisa pesan minum. Sisa uang anda: Rp${money - juice}`);
        } else {
            console.log(`Anda bisa pesan minum. Sisa uang anda: Rp${money - anggur}`);
        }
    } else {
        console.log("Uang tidak cukup. Anda harus pulang.");
    }
} else {
    console.log("Anda tidak boleh masuk!");
}
