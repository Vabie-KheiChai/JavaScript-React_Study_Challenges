
// Arrow functions
  const greet = () => {
    let firstName = "KheiChai";
    let lastName =" Merry";

    console.log("hello " + firstName + " " + lastName);
}
greet();



// Arrow function return with parameters

const login =(num1 , num2)=> {
    return num1 + num2;
}
let total = login(6, 9);
console.log(total);



// E.g 1 : without return
const showWelcome =(userName)=>{
    
    console.log("Welcome back " + userName);
}
showWelcome("Khei Chai");



// E.g 2 : with return

const calculateTotal =(price , quantity)=> {
    return price * quantity ;

}
let TotalPrice = calculateTotal (5, 6);
console.log(" Total price is : " + TotalPrice);