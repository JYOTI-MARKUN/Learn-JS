class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
  
    getBirthYear() {
      return new Date().getFullYear() - this.age
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  
    set fullName(value) {
      const [firstName, lastName] = value.split(' ')
      this.firstName = firstName
      this.lastName = lastName
    }
  }

  //   const user1 = new User('Aman', 'Mishra', 32)
//   const user2 = new User('Anurag', 'Singh', 72)



  
class student extends User{
    constructor (firstName,lastName,age,standard){
    super(firstName,lastName,age)
    this.standard = standard
    }    
    Work(){
        console.log("studying study")
    }
}  

  const stu1 = new student('Aman', 'Mishra', 32,"Mca")
  const stu2 = new student('Anurag', 'Singh', 72,12)


  class employee extends student{
    constructor (firstName,lastName,age,standard,company){
        super(firstName,lastName,age,standard)
        this.company = company
        }    
        Work(){
            console.log("employee work")
        }
  }  

  const emp1 = new employee('Aman', 'Mishra', 32,"mca","Google")
  const emp2 = new employee('Anurag', 'Singh', 72,12,"amazone")