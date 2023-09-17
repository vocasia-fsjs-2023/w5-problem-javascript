var kata = "I love Javascript";
var output = "";
// Do your work here
for (var i = 0; i < kata.length; i++){
    var a = kata[i];
  if(a === 'a' || a === 'i' || a === 'u' || a === 'e' || a === 'o' || a === 'A' || a === 'I' || a === 'U'|| a === 'E' || a === 'O') {
    output += '$';
  }else {
    output += a;
  }
}
kata = output;
// Dont work after this line
console.log(kata);
