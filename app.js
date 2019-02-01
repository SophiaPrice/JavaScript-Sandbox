// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
// alert("hello world");

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm("Are you sure?")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

let val;

// Outer height & width
val = window.outerHeight;
val = window.outerWidth;

// Inner height & width
val = window.innerHeight;
val = window.innerWidth;

// Scroll Points
val = window.scrollY; // Vertical
val = window.scrollX; // Horizontal

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.search; // Shows Query String

// Redirect
// window.location.href = "http://google.com";

// window.location.reload();

// History Object
// window.history.go(-1); // Goes back a number of times
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appVersion;
val = window.navigator.language;

console.log(val);
