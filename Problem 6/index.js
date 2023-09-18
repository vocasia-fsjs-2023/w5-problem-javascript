var kata = "I love Javascript";

// Do your work here
var vocal = '';

for (var i = 0; i < kata.length; i++) {
  if (kata[i] === 'a' || kata[i] === 'e' || kata[i] === 'i' || kata[i] === 'o' || kata[i] === 'u' || kata[i] === 'I') {
    vocal += '$';
  } else {
    vocal += kata[i];
  }
}
console.log(vocal);
// Dont work after this line
console.log(kata);
