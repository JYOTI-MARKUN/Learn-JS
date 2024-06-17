// this is using argument that we pass during function call
function add(){
    console.log(arguments);
    let sum = 0;
    for (let i =0 ;i<arguments.length;i++){
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(add(10,20,30,155));

// rest Parameter is passed during funnction definition and it is more accurate to use 
//  the rest operator collect the parameter  pass during function call and make an array out of it 

function add1(...num){
    console.log(num);
    let sum = 0;
    for (let i =0 ;i<num.length;i++){
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(add1(10,20,30,155));

// passing an array as rest parameter
const num1 = [2,5,8,15,12,14]
function add2(a,b,...number){
    console.log(`a ${a},b ${b},number ${number}`);
  
}

const result = add2(...num1,21,26); // here first two element will be a nad b and rest of the element will store in rest parameter in the form of an array
// console.log(result);

// note that rest paramter should be last parameter

// add using reduce function

function add3(...numbers){
    debugger;
      return numbers.reduce((acc,current)=>{
          acc = acc+current
      })
    
}
add3(...num1);