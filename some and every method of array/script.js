// some function in js return truthy and falsy values, as soon as it encounters truthy value in the array it exists the loop and  return true value

const numbers  = [0,2,4,5,6,8,10]

const result = numbers.some((num,index)=>{
           if (num %2 !=0){
            console.log(num,index)
           }
            return num % 2 !=0 // this will give true at 5 so loop will exist
})


// every function is just oposite of every function it will stops the loop as soo as it encounters a falsy value


const numbers2  = [5,3,7,15,6,8,10]

const result2 = numbers2.some((num,index)=>{
           if (num %2 ==0){
            console.log(num,index)
           }
            return num % 2 ==0  
})


//NOTE : SOME FUNCTION CHECKS WHETHER ATLEAST ONE OF THE ELEMETN STATICFY A GIVEN CONDITION AND EVERY FUNCTION CHECK WHETHER ALL THE ELEMTN OF THE ARRAY STATISFY THE GIVEN CONDITION 