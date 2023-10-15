var kata = "I love Javascript";
// Do your work here

var output = "";

for (var i = 0; i < kata.length; i++) {
  var abjad = kata[i];
  if (abjad === 'a' || abjad === 'A' || abjad === 'e' || abjad === 'E' || abjad === 'i' || abjad === 'I' || abjad === 'o' || abjad === 'O' ||
      abjad === 'u' || abjad === 'U') {
      output += '$';
  } else {
    output += abjad;
  };
};

var kata = output;

// Dont work after this line
console.log(kata);
