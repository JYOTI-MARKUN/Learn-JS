class CreateUser{
    #age
    constructor(firstName,lastName,age){    
        this.firstName = firstName
        this.lastName = lastName
        // this.__age = age
        this.#age = age
    }

hi = "hellow"
#namste ="namaste JS"
getBirthYear(){
    console.log(this.#getFullName())
    console.log(this.#namste)
    return new Date().getFullYear() - this.#age;
    
}

#getFullName(){
    return this.firstName + " " + this.lastName
}

}

const user1 = new CreateUser("jyoti","markun",25)
const user2= new CreateUser("soni","tiwari",28)

const obj = {
    name :"joo",
    // #age :25, // through an error
    ['#age']:20,
}