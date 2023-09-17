var kata = "I love Javascript";

// Do your work here
for (var i = 0, hasil = ""; i < 17; i++) {
    var huruf = kata[i];
    if (huruf === 'a' || huruf === 'e' || huruf === 'i' || huruf === 'o' || huruf === 'u') {
      hasil += '$';
    } else {
      hasil += huruf;
    }
  }
  kata = hasil;
// Dont work after this line
console.log(kata);
