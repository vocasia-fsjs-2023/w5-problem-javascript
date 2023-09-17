var kata = "I love Javascript";

// Do your work here

const array = ["a", "i", "u", "e", "o"];
for (let i = 0; i < kata.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (kata[i].toLocaleLowerCase() === array[j]) {
      kata = kata.replace(kata[i], "$");
    }
  }
}

// Dont work after this line
console.log(kata);
