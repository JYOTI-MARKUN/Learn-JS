// static method are the method which is defibed in classes these method do not invole in the prototype of the object created from that class so we can not use statc property or method in the object that are created from that class

class CreateUser {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }

    // static property
     static hyy ="helowwwww"  // can be access using CreateUser.hi
    
    // static block  (it will run without call)
    static {
        console.log(this);  // this is representing Createuser class
        this.hi = "hellow js";
        this.printValue = function(){
            return "jojojjo"
        }
        console.log("I am statc block");
        var a =12
    }
    
     getBirthYear() {
      return new Date().getFullYear() - this.age
    }
// statisc method

    static getFullName() {
      return this.firstName + ' ' + this.lastName
    }
  }

  CreateUser.myProfession = "webDeveloper"  // this is also static method this is same as static method its just a syntax to write everything together and the value added in statuc method will add to the class directly so that we can not access the property
  
  const user1 = new CreateUser('Aman', 'Mishra', 32)  // static property user1.hi will give undefined
  const user2 = new CreateUser('Anurag', 'Singh', 72)
  
  