var kata = "I love Javascript";
// Do your work here
// Fungsi untuk mengganti huruf vokal menjadi "$"
function gantiHuruf(kata) {
    let hasil = "";
    for (let i = 0; i < 17; i++) {
        let huruf = kata[i];
        if ( huruf === 'a' || huruf === 'e' || huruf === 'i' || huruf === 'o' || huruf === 'u' ) {
            hasil += '$';
        } else {
            hasil += kata[i];
        }
    }
    return hasil;
}
kata = gantiHuruf(kata);
// Dont work after this line
console.log(kata);
