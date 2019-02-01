// Global Scope
var a = 1;
let b = 2;
const c = 3;

// Function Scope
function test() {
  var a = 4;
  let b = 5;
  const c = 6;

  console.log("Function Scope: ", a, b, c);
}

// Block Scope - Happens for Loops & If Statements
if (true) {
  var a = 7;
  let b = 8;
  const c = 9;

  console.log("Block Scope: ", a, b, c);
}

test();

console.log("Global Scope: ", a, b, c);
