var kata = "I love Javascript";

// Do your work here
function vocalDollar(kata) {
  let hasil = "";
  for (let i = 0; i < kata.length; i++) {
    let huruf = kata[i];
    if (
      huruf === "a" ||
      huruf === "e" ||
      huruf === "i" ||
      huruf === "o" ||
      huruf === "u" ||
      huruf === "A" ||
      huruf === "E" ||
      huruf === "I" ||
      huruf === "O" ||
      huruf === "U"
    ) {
      hasil += "$";
    } else {
      hasil += huruf;
    }
  }
  return hasil;
}

kata = vocalDollar(kata);
// Dont work after this line
console.log(kata);
