function myIntro(userName,age,profession){
    // if condition with undefined
    // if (userName===undefined){
    //     userName = "jyoti"
    // }
    // if condition with a falsi value (undefined is a falsy value but not operator will make it truthy)
    if(!userName){
        userName="jyoti"
    }
    console.log("hi");
    console.log(`my name is ${userName}`)
    console.log(`my age is ${age || 28}`)
    console.log(`i am a ${profession || "android dev"}`)
    return 720;
}
// note a function does two work firts it will do the write the code we have defined inside its block second it gives us a return value that can be anything we want and by default it is undefined


//                  function call
// const returnValue = myIntro();  // to check the return value

myIntro()
console.log("********");
myIntro("jopjo",25,"web developer");


// NOTE : THE VARIABLES THAT WE PASS THROUGH DURING FUNCTION DEFINITION IS CALLED PARAETERS AND THE VARIBLE WE GIVE IN FUNCTION CALL IS CALLED ARGUMENTS DATA TYPE OF PARAMETERS IS SSAME AS THAT OF ARGMENET IF WE DO NOT GIVE ANY ARGUMENT DURING FUNCTION CALL THAT IT WILL BE OF UNDEFINED TYPE,
// BEFORE ES6 WE USE IF STATMENT TO PASS DEFAULT PARAMTERS

