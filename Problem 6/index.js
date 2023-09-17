var kata = "I love Javascript";

// Do your work here
var kataBaru = '';

for (var i = 0; i < kata.length; i++) {
  var karakter = kata[i];

 
  if (karakter === 'a' || karakter === 'e' || karakter === 'i' || karakter === 'o' || karakter === 'u') {
    kataBaru += '$'; 
  } else {
    kataBaru += karakter; 
  }
}

console.log(kataBaru); 

// Dont work after this line
console.log(kata);
