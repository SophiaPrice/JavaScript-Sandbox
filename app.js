const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 21,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL"
  },
  getBirthYear: function() {
    return new Date().getFullYear() - this.age;
  }
};

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 }
];

let val;

val = person;

// Get Specific Value
val = person.firstName; // recommended
val = person["lastName"];
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

console.log(val);
