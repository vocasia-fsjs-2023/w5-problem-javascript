var kata = 'i love javascript';
var kataNew = '';

for (var i = 0; i < kata.length; i++) {
  var huruf = kata[i];
  if (huruf === 'a'  huruf === 'e'  huruf === 'i'  huruf === 'o'  huruf === 'u') {
    kataBaru += '$';
  } else {
    kataNew += huruf;
  }
}

console.log(kataNew);