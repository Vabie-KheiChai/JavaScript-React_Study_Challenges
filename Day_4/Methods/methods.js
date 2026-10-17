
// Object Methods.

const user ={
    FirstName : "Khei",
    LastName : "Chai",
    Address : {
        city : "Hakha",
        Country : "Myanmar",
    },
    
        skills : ["HMTL", "Python", "Java"],
    
        FullName: ()=>{
            return this.FirstName  + this.LastName ;
        }

}
console.log(user.FullName());



 