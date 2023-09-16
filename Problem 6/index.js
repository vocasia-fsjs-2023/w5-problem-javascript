var kata = "I love Javascript";
var hasil = '';

// Do your work here
for (var i = 0; i < kata.length; i++) {
  var currentChar = kata[i];

  if ('aeiouAEIOU'.includes(currentChar)) {
    hasil += '$';
  } else {
    hasil += currentChar;
  }
}
kata = hasil;
// Dont work after this line
console.log(kata);
