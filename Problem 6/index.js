var kata = "I love Javascript";

// Do your work here
function gantiVokal(kata) {
  let hasil = "";
  for (let a = 0; a < 17; a++) {
    let huruf = kata[a];
    if (
      huruf === "a" ||
      huruf === "i" ||
      huruf === "u" ||
      huruf === "e" ||
      huruf === "o"
    ) {
      hasil += "$";
    } else {
      hasil += huruf;
    }
  }
  return hasil;
}
kata = gantiVokal(kata);
// Dont work after this line
console.log(kata);
