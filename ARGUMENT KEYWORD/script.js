// argument keyword is adefualt keyword to evry function except for the arrow function
function add (a,b){
    return a+b;
}

function add1(){
    sum = 0;
    console.log(arguments);
    for (let i = 0;i<arguments.length;i++){       
        sum+=arguments[i];
       
    }
    return sum
}

// with function expression returning argument

const add2 = function (){
    sum = 0;
    console.log(arguments);  // argument is a array like object
    for (let i = 0;i<arguments.length;i++){       
        sum+=arguments[i];
       
    }
    return sum
}


// with arrow function argument keyword do not match (will through an error like argument is not defined )

const add3 = ()=>{
    sum = 0;
    console.log(arguments);  // argument is a array like object
    for (let i = 0;i<arguments.length;i++){       
        sum+=arguments[i];
       
    }
    return sum
}


