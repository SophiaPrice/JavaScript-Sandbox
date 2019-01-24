const name = "Sophia";
const age = 21;
const job = "Web Developer";
const country = "Ireland";
let html;

// No Template Literal (es5)
html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  "</li><li>Job: " +
  job +
  "</li><li>Country: " +
  country +
  "</li></ul>";

// Template Literal (es6)
function hello() {
  return "hello";
}

html = `
<ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>Country: ${country}</li>
  <li>Math: ${2 + 2}</li>
  <li>Function: ${hello()}</li>
  <li>Conditional: ${age > 30 ? "Over 30" : "Under 30"}</li>
</ul>
`;

document.body.innerHTML = html;
