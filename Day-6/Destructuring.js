const user ={
    name : "KheiChai",
    id : 2,
    age : 22,
    address :{
        city : "Yangon",
        country : "Myanmar"
    },
}

// Object Destructuring
function UserName (person){
// function UserName(name,id,age,address)
    const {name, id , age , address} =person;

    console.log("Name : " + name);
    console.log("ID :" +id);
}
UserName(user);



// Array Destructuring
const fruits = ["Kheichai", "Yin Min Aung", "Monica", "Hana"];

function printFruits (fruits){
    const [one, two, three, four] = fruits;

console.log(one);
console.log(two);
console.log(three);
console.log(four);
}
printFruits(fruits);


// Real example for object destructuring
const students = {
    name : "Kheichai",
    age : 22 ,
    course : "B.Tech"
}
function printStudents (students){
    const {name, age , course} = students;

    console.log(name);
    console.log(age);
    console.log(course);
}
printStudents(students);