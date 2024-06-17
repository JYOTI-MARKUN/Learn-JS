// const user = {
//     firstName :"jyoti",
//     lastName : "Markun",
//     fullName : function(){
//         return (`${this.firstName} ${this.lastName}`);
//     }
// }

// here we can access the fullName but there is one problem when we try to set fullName a value then it will no longer be a function
// console.log(user.fullName()); 

// user.fullName = "harry potter";

// USING GETTER  by applying get ans set method we can use a function as object
const user = {
    firstName :"jyoti",
    lastName : "Markun",
    get fullName (){
        console.log("getting value...............");
        return (`${this.firstName} ${this.lastName}`);
    },
    set fullName (value){
        // console.log("setting value......")
        // console.log(value);
        const [firstName ,lastName] = value.split(' ');
        this.firstName =firstName;
        this.lastName = lastName;
    }
}

// getting
console.log(user.fullName);

// setting
console.log(user.fullName = "harry potter");


