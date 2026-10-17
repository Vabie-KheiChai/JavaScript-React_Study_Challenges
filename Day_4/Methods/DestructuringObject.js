/* // Object Destructuring Structure

const user = {
    name : "Kheichai",
    age : 33,
};
// let name =user.name
// console.log(user.name);
const {name,age} = user; // Object destructuring
console.log(name);
console.log(age);


// Array Destructuring 
const students = ["Kheichai", "Yin Min Aung", "Monica", "Hanah"];
// const stu1 = students[0];
const [stud1,stud2, stud3] =students;
console.log(stud2);
 */

const student = {
    name: "Kheichai",
    email: "kheichai@gmail.com",
    course: "Computer Science",
    paymentStatus: "Paid"
};

// Extract values
const { name, course, paymentStatus } = student;

console.log(name);
console.log(course);
console.log(paymentStatus);