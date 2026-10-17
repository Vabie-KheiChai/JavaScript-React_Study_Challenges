/* 
// for in

const student = {
    name: "Kheichai",
    age: 22,
    course: "Computer Science"
};

for (const key in student) {

    console.log(key);
}



// for ...of 
 */


/* 


// 1. Create notification Functions

function notifyCustomer (){
    console.log("Your piza is ready...");
}

// 2. Create the main function

function OrderPiza (callback){
    console.log(" Piza Ordered...");
    console.log("Your piza is preparing....");
 
// Step-3 : Execute  the callback function
    callback();
}

//Step-4 : Start the process

OrderPiza(notifyCustomer); */



function showmessage (){
    console.log("Submitted Assignments Successfully..");
}

function submitAssignment(callback){
    console.log("Student submit his assignment...");

    callback();
}
submitAssignment(showmessage);


