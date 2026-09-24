
// Object
/* const car ={
    model : "Toyota",
    carColor : " White",
    CarModel : " 2023",
}
console.log(car.model);
console.log(car.carColor);
console.log(car.model);
 */

// Arrays
/* const user =["kyaw",  "MgMg" , "HlaHla"];
// console.log(user);
console.log(user[2]); // Access with index
console.log(user);
user.push("Ko Ko");
 */



// Assignment -1 
const user ={

}
user.name ="John";
user.username = "Smith";
user.name="Pete";

//  Remove the property name from the object
delete user.name;
console.log(user);





 // Assignment -2
 let salaries ={
    john :100,
    Ann : 160,
    Pete : 130,
 }
let sum =0;
for (let name in salaries) {
    sum += salaries [name];
}
console.log(sum);