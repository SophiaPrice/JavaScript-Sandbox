// Log to Console
const greeting = "Hello World";

console.clear();

console.log(greeting);
console.log(123);
console.log(true);

console.table({ a: 1, b: 2 });

console.error("This is an error");

console.warn("This is a warning");

console.time("checkTime");
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.timeEnd("checkTime");
