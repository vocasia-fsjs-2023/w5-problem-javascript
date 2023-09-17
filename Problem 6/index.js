var kata = "I love Javascript";

// Do your work here

var vocal = "aiueoAIUEO"

// tanpa menggunakan variabel tambahan
for (let i = 0; i < kata.length; i++) {
    if (vocal.includes(kata[i])) {
      kata = kata.substring(0, i) + '$' + kata.substring(i + 1);
    }
}

// menggunakan variabel tambahan
// var hasil = "";
// for (let i = 0; i < kata.length; i++) {
//     vocal.includes(kata[i]) ? hasil += "$" : hasil += kata[i]
// }

// kata = hasil

// Dont work after this line
console.log(kata);
