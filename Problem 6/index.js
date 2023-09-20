var kata = 'i love javascript';
var kataBaru = '';

for (var i = 0; i < kata.length; i++) {
    var huruf = kata[i];
    if (huruf === 'a' || huruf === 'e' || huruf === 'i' || huruf === 'o' || huruf === 'u') {
        kataBaru += '$';
    } else {
        kataBaru += huruf;
    }
}

console.log(kataBaru);
