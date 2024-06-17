function a(b){
    console.log(b);
    typeof b
}

a("jyoti Markun")  // passing string as argument
a(25) // passing number as argument
a({"name":"jojo","age":28})  // passing object as function
a()
a (function d (){
    console.log("hellow! i am a higher order function");
}) // passing function as argument




// when a function is pass as an argument to another function that the passing function is called callback function and the function in which it is passing is called higher order function