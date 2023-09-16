var kata = "I love Javascript";

// Do your work here
var hasil = "";

for (var i = 0; i < kata.length; i++) {
  var karakter = kata[i];
  if (karakter === 'a' || karakter === 'A' ||
      karakter === 'e' || karakter === 'E' ||
      karakter === 'i' || karakter === 'I' ||
      karakter === 'o' || karakter === 'O' ||
      karakter === 'u' || karakter === 'U') {
    hasil += '$';
  } else {
    hasil += karakter;
  }
}

var kata = hasil;
// Dont work after this line
console.log(kata);
