// Creating Arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];
let val;

// Get Array Length
val = numbers.length;

// Check if is Array
val = Array.isArray(numbers);
val = Array.isArray("numbers");

// Get Single Value
val = numbers[3];
val = numbers[0];

// Insert into Array
numbers[2] = 100; // Replaces number at position [2]

// Find Index of Value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// Take off from End
numbers.pop();

// Take off from Front
numbers.shift();

// Add to Array end
numbers.push(250);

// Add to Array start
numbers.unshift(120);

// Splice Values
numbers.splice(1, 1);
numbers.splice(1, 3);

// Revers
numbers.reverse();

// Concatenate
val = numbers.concat(numbers2);

// Sort Strings
val = fruit.sort();

// Sort Numbers
numbers.sort(); // Sorts by first char of number
// Sort Low -> High
numbers.sort(function(x, y) {
  return x - y;
});
// Sort High -> Low
numbers.sort(function(x, y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
