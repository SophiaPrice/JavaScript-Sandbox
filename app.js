let val;

// TO STRING
// Number to String
val = String(5);
val = String(4 + 4);

// Bool to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

console.log(val, typeof val, val.length);

// TO NUMBER
// String to Number
val = Number("5");
val = Number("Hello");

// Bool to Number
val = Number(true);
val = Number(false);

// Array to Number
val = Number([1, 2, 3]);

// Null to Number
val = Number(null);

// String to Int
val = parseInt("100.30");

// String to Float
val = parseFloat("100.30");

// Output
console.log(val, typeof val);
console.log(val.toFixed(2)); // Sets Decimal Points
