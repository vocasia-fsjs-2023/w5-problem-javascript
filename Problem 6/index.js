var kata = "I love Javascript";

// Do your work here
var hasil = '';

for (var i = 0; i < kata.length; i++) {
    var huruf = kata[i];
    
    if (huruf === 'a' || huruf === 'i' || huruf === 'u' || huruf === 'e' || huruf === 'o' ||
        huruf === 'A' || huruf === 'I' || huruf === 'U' || huruf === 'E' || huruf === 'O') {
        hasil += '$';
    } else {
        hasil += huruf;
    }
}

kata = hasil; 

// Dont work after this line
console.log(kata);
