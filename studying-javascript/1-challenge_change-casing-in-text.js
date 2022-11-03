var name = prompt("What is your name?");

// Take out the first letter of name and change it to block

var initial = name.slice(0,1);
initial = initial.toUpperCase();

// Make sure the rest of the characters are in lower case
var restOfName = name.slice(1,name.length)
restOfName = restOfName.toLowerCase()


// Concatenate it with the rest of the letters
properName = initial + restOfName;
alert("Hello, " + properName + ".");
