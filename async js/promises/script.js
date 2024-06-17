// as we know if we add new keyword before a function it will rerurn an object
 const resolveButton = document.querySelector("#resolve-btn")
 const rejectButton = document.querySelector("#reject-btn")

// three state of promises

// pending promise
const p = new Promise(()=>{
//   console.log("pending promise")
})

// resolved promise
const p1 = new Promise((resolve,reject)=>{
    resolve("promise resolved");
//   console.log("promise resolved")
})


// reject promise
const p2 = new Promise((resolve,reject)=>{
    reject("promise rejected");
//   console.log("promise rejected")
})

// promise with settimeout
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
   resolve("{name:'jyoti'}")
    },4000)
})

// promise using button : note a promise can only be in one state at a time
const p4 = new Promise((resolve,reject)=>{
    resolveButton.addEventListener("click",()=>{
        resolve("promise resolve")        
    })
    rejectButton.addEventListener("click",()=>{
        reject ("promise reject")
    })
})

p4.then((data)=>{
    console.log("hello i am the code inside the resolve state")
    console.log(data);
}).catch((err)=>{
    console.log("hi, i ma the code inside the reject state")
    console.log(err)  
}).finally(()=>{
    console.log("finally")
})

setTimeout(()=>{
    console.log("hiii")
},2000);
 