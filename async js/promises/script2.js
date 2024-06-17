const newp = new Promise((resolve,reect)=>{
    // resolve("promise resolved")
    // rejectButton("promise rejected")
});



setTimeout(()=>{
console.log("hi")    
},200)

newp.then((data)=>{
    console.log(data)
   }).catch((err)=>{
       console.log(err)
   }).finally(()=>{
       console.log("promise settled")
   });


// resolve and reject both method return a promise so we can use .then and .catch method in it infinite time

const resolveButton = document.querySelector("#resolve-btn");
const rejectButton = document.querySelector("#reject-btn");

const p = new Promise((resolve,reject)=>{
//    resolve("promise resolveddddd")
   reject("promise rejectedddd")
})

p.then((data)=>{
  console.log(data)
  return "jyoti"
}).catch((err)=>{
  console.log(err)
  return "error"
}).then((data)=>{
    console.log(data)
    return "jyoti markun";
}).then((data)=>{
    console.log(data)
    return "learn js"
}).then((data)=>{
   console.log(data)
});
  