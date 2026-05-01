let student = { name: "Sameera", age: 18 };
let details = { city: "hyderabad", course: "B-Tech" };
let fullDetails = { ...student, ...details };
console.log(fullDetails);