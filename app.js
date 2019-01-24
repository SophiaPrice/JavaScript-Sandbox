const fName = "William";
const lName = "Johnston";
const age = 21;
const str = "Hello, my name is " + fName + " and I am " + age;

let val;

val = fName + lName;

// Concatenation
val = fName + " " + lName;

// Append
val = "Brad ";
val += "Traversy";

val = "Hello, my name is " + fName + " and I am " + age;

// Escaping
val = "That's awesome, I can't wait";
// val = 'That\'s awesome, I can\'t wait';

// Length
val = fName.length;

// concat()
val = fName.concat(" ", lName);

// Change Case
val = fName.toLowerCase();
val = fName.toUpperCase();

// indexOf()
val = fName.indexOf("l");
val = fName.lastIndexOf("l");

// charAt()
val = fName.charAt("2");

// Get Last Character
val = fName.charAt(fName.length - 1);

// substring()
val = fName.substring(0, 4);

// slice()
val = fName.slice(0, 4);
val = fName.slice(-3);

// split()
val = str.split(" ");

// replace()
val = str.replace("William", "Sophia");

// includes()
val = str.includes("Hello");
val = str.includes("foo");

console.log(val);
