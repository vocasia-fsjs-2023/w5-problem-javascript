let name = "ihsan"; 
let age = 17; 
let money = 300000; 

if (name === "") {
    console.log("Anda tidak boleh masuk!");
} else {
    if (age < 17) {
        if (money >= 50000) {
            money -= 50000;
            console.log(`Anda bisa pesan minum. Sisa uang anda: ${money}`);
        } else {
            console.log("Uang tidak cukup. Anda harus pulang.");
        }
    } else {
        if (money >= 300000) {
            money -= 300000;
            console.log(`Anda bisa pesan minum. Sisa uang anda: ${money}`);
        } else {
            console.log("Uang tidak cukup. Anda harus pulang.");
        };
    };
};
