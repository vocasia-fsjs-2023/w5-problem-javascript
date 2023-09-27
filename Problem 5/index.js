// Problem 3-1
var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";

var kalimat = word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh;

console.log("Problem 3-1", kalimat);

// Problem 3-2
var word2 = "wow JavaScript is so cool";
var exampleFirstWord = word2[0] + word2[1] + word2[2];
var secondWord = word2.substring(4, 14); // JavaScript
var thirdWord = word2.substring(15, 17); // is
var fourthWord = word2.substring(18, 20); // so
var fifthWord = word2.substring(21, 25);

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);

// Problem 3-3
var word3 = "wow JavaScript is so cool";
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, word3.indexOf(" ", 4));
var thirdWord3 = word3.substring(word3.indexOf(" ", 4) + 1, word3.indexOf(" ", word3.indexOf(" ", 4) + 1));
var fourthWord3 = word3.substring(word3.indexOf(" ", word3.indexOf(" ", 4) + 1) + 1, word3.indexOf(" ", word3.indexOf(" ", word3.indexOf(" ", 4) + 1) + 1));
var fifthWord3 = word3.substring(word3.indexOf(" ", word3.indexOf(" ", word3.indexOf(" ", 4) + 1) + 1) + 1);

console.log("First Word: " + exampleFirstWord3);
console.log("Second Word: " + secondWord3);
console.log("Third Word: " + thirdWord3);
console.log("Fourth Word: " + fourthWord3);
console.log("Fifth Word: " + fifthWord3);

// Problem 3-4
var word4 = "wow JavaScript is so cool";
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word3.substring(4, 14); // JavaScript
var thirdWord4 = word3.substring(15, 17); // is
var fourthWord4 = word3.substring(18, 20); // so
var fifthWord4 = word3.substring(21); // cool

var firstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;

console.log(
  "First Word: " + exampleFirstWord4 + ", with length: " + firstWordLength
);
console.log("Second Word: " + secondWord4 + ", with length: " + secondWordLength);
console.log("Third Word: " + thirdWord4 + ", with length: " + thirdWordLength);
console.log("Fourth Word: " + fourthWord4 + ", with length: " + fourthWordLength);
console.log("Fifth Word: " + fifthWord4 + ", with length: " + fifthWordLength);
