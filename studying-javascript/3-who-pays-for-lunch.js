// Who pays for lunch?
// A program that generates random items in an array.

function name() {
  let names = ["john", "sola", "sade", "tayo", "kofo"];

  //Write your code here.
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];
  return randomPerson + " is going to buy luch today!";
}

/******Don't change the code below*******/
console.log(name());
