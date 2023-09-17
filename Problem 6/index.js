var kata = "I love Javascript";


// Do your work here
var newKata = "";

for (var i = 0; i < kata.length; i++) {
  var huruf = kata[i];
  if ((huruf === 'a' || huruf === 'e' || huruf === 'i' || huruf === 'o' || huruf === 'u' ||
      huruf === 'A' || huruf === 'E' || huruf === 'I' || huruf === 'O' || huruf === 'U') && i !== 0) {
        newKata += '$';
  } else {
    newKata += huruf;
  }
}

kata = newKata;

// Dont work after this line
console.log(kata);
