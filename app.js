const today = new Date(); // Todays Date
let birthday = new Date("12-18-1997 11:25:00");
let val;

birthday = new Date("December 18 1997");
birthday = new Date("12/18/1997");

val = today;
val = today.toString();
val = birthday;
val = today.getFullYear();
val = today.getMonth(); // 0 based (January = 0)
val = today.getDate();
val = today.getDay();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // Timestamp

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log("val", val);
console.log("birthday", birthday);
