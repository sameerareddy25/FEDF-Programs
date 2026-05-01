let student = {
    name: "Sameera",
    age: 18,
    city: "Hyderabad"
};
let {
    name: studentName,
    age,
    country = "India",
    ...otherDetails
     } = student;
    console.log("Name:" , studentName);
    console.log("Age:" , age);
    console.log("Country:" , country);
    console.log("Other Details:" , otherDetails);
    function display({ name, age}) {
        console.log(`Student: ${name}, Age ${age}`);
    }
    display(student);
