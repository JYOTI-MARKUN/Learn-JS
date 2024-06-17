// HIGHER ORDER FUNCTION : FUNCTION THAT TAKES ANOTHER FUNCTION AS PARAMETER IS CALLED HIGHER ORDER FUNCTION AND THE FUCNTION THAT IS SEND AS PARAMETER IS CALLED CALLBACK FUNCTION 

// WHEN WE RETURN A FUNCTION FROM ANOTHER FUNCTION THEN IT IS ALSO CALLED HIGHER ORDER FUNCTION

const a = 4
const b = 6

function add(){

    console.log(a+b);
}


add();
console.dir(add); // write this in object format


// all function can not be method but all methods are functions, a function is called method when we can use it using .(dot)  or we can say a function is a method when it is defined inside an object

maths = {
    e : 2.718281828459045,
    add: function (a,b){  // anomenous funcion (a function without name)
        return (a+b);
    },
    subtract(num1,num2){ // new ES6 method to defined a function
        return (num1-num2);
    },
    cube(num){
        return num**3;
    }

}

// when we add a number in undefined we will get NaN