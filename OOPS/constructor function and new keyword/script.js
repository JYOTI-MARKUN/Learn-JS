


// function getUserBirthYear(){
//     // console.log(this)  // point to the window
//     return new Date().getFullYear()-this.age  // this code will give an error user is not defined as we have defined user inside the function and try to access it outside the fuunction so to overcome this error we need to use this keyword
//    }


// function createUser(firstName,lastName,age){
//     const user = {
//         firstName,
//        lastName,
//        age,
//      getUserBirthYear,    
//     }
//     return user
// }

// const user1 = createUser("jojo","markun",25);
// const user2 = createUser("jyoti","markun",35);

// from the above code we have solved problem with factory function now

// user1.getUserBirthYear === user2.getUserBirthYear // true  as function getUserBirthYear will create only once in the memory

// the above code solves the problem but creates a new problem called polymorphism (i.e. one function for many behaviour ) also the above code break the rule of ENCAPSULATION AND ABSTRACTION  AS we created a function globally


// METHOD2

// function createUser(firstName,lastName,age){
//     const user = {
//         firstName,
//        lastName,
//        age,
//      getUserBirthYear:createUser.commonMethods.getUserBirthYear,    
//     }
//     return user
// }

// createUser.commonMethods={
//    getUserBirthYear: function (){
//       return new Date().getFullYear()-this.age
//     }
// }


// const user1 = createUser("jojo","markun",25);
// const user2 = createUser("jyoti","markun",35);


// user1.getUserBirthYear === user2.getUserBirthYear  // true


// METHOD3 : when we call a function ysing new keyword then t will be a constructor function
function CreateUser(firstName,lastName,age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
}

CreateUser.prototype.getBirthYear = function (){
    return new Date().getFullYear()-this.age
}


CreateUser.prototype.getFullName = function (){
    return this.firstName + " "+this.lastName
}
const user1 = CreateUser("jojo","markun",25);  // this will give undefined as without new function this keyword points to window object 
const user2 = new CreateUser("jyoti","markun",35); // using new keyword now this will point that object
const user3 = new CreateUser("Anana","markun",5); 



