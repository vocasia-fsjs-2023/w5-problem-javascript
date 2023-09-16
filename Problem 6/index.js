var kata = "I love Javascript";

// Do your work here
function gantiVokal(kata){

    let hasil = "";
    for (let i =0; i < 17; i++){
        const karakter = kata[i];
        if(karakter === 'a' || karakter === 'i' || karakter === 'u' || karakter === 'e' || karakter === 'o'){
            hasil += '$';
        }else {
            hasil += karakter;
        }
    }
    return hasil;
}
kata = gantiVokal(kata);
// Dont work after this line
console.log(kata);
