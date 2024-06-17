function CreateUser(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  
  CreateUser.prototype.getBirthYear = function() {
    return new Date().getFullYear() - this.age
  }
  
  CreateUser.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
  }
  
  const user1 = new CreateUser('Jyoti', 'Markun', 32)
  const user2 = new CreateUser('Anu', 'Singh', 72)