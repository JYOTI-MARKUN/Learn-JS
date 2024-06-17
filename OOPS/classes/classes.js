class createUser{
    
}
// we can add methods in prototype of the class like this also

createUser.prototype.getBirthYear = function() {
    return new Date().getFullYear() - this.age
  }
  
createUser.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
  }
  

const user1 = new createUser('Jyoti', 'Markun', 32)
const user2 = new createUser('Anu', 'Singh', 72)  

// NEW METHOD ADDING INSIDE THE CLASS

class newUser{
    constructor(a,b,c){
        // console.log("hi");
        // console.log(a,b,c);
        this.firstName = a
        this.lastName = b
        this.age = c
    }
    // console.log("hellow") // this code will give error
    getBirthYear(){
        console.log("hhhhh") // thi code will not runs
        return new Date().getFullYear() - this.age
    }
    getFullName(){
        return this.firstName + ' ' + this.lastName
    }
}

const user = new newUser('Jyoti', 'Markun', 32);
const user01 = new newUser('Anu', 'Singh', 72);