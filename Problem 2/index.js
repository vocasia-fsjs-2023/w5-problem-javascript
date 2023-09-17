
let name = "Uti Tiyanum";
let age = 21;
let money = 400000;

if (name === "") {
    console.log("Anda tidak boleh masuk!");
} else {
    let hargaMinuman = 0;

    if (age < 17) {
        hargaMinuman = 50000; // Juice
    } else {
        hargaMinuman = 300000; // Anggur
    }

    if (money < hargaMinuman) {
        console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
        money -= hargaMinuman;
        console.log(`Anda bisa pesan minum. Sisa uang anda: ${money}`);
    }
}