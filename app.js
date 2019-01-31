// FOR LOOP
for (let i = 0; i < 3; i++) {
  if (i === 1) {
    console.log("2 is my favourite number");
    continue; // Stops loop & contiues to next iteration
  }

  if (i === 2) {
    console.log("breaks the loop");
    break; // Ends loop
  }
  console.log("Number " + i);
}

// WHILE LOOP
let j = 0;

while (j < 3) {
  console.log("While " + j);
  j++;
}

// DO WHILE
let k = 10;

do {
  console.log("Do " + k);
  k++;
} while (k < 3);

// LOOP THROUGH ARRAY
const cars = ["Ford", "Nissan", "Honda", "Toyota"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// FOREACH
cars.forEach(function(car, index, array) {
  console.log(index + " : " + car);
  console.log(array);
});

// MAP
const users = [
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Sarah"
  },
  {
    id: 3,
    name: "Karen"
  }
];

const ids = users.map(function(user) {
  return user.id;
});

console.log("Ids " + ids);

// FOR IN LOOP
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40
};

for (let x in user) {
  console.log(x + " : " + user[x]);
}
