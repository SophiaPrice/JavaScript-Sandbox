// FUNCTION DECLARATIONS
function greet(fName = "Sophia" /* ES6 Default */) {
  // ES5 Default
  if (typeof fName === "undefined") {
    fName = "Sophia";
  }

  return "Hello " + fName;
}

console.log(greet());

// FUNCTION EXPRESSIONS
const square = function(x) {
  return x * x;
};

console.log(square(8));

// IMMEDIATELY INVOKABLE EXPRESSIONS - IIFEs
(function() {
  console.log("IIFE Ran..");
})();

// PROPERTY METHODS
const todo = {
  add: function() {
    console.log("Add todo..");
  },
  edit: function(id) {
    console.log(`edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log("Delete todo...");
};

todo.add();
todo.edit(22);
todo.delete();
