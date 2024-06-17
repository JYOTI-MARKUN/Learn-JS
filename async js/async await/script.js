// async function makeRequest(){
//  return "jyoti"
// }

// throwing error using throw keyword

// function makeRequest(){
//     console.log("hellow")
//     throw 'error in programe';
//     console.log("hii")
//      }


// throwing error using new throw keyword

// function hi(){
//     console.log("hellow")
//       throw new error ('get an error')
//     console.log("hi")
// }



// async function makeRequest(){
//  throw new error('error in programe')
// }


// async function makeRequest(){
//     const url = `https://procodrr.vercel.app/?sleep=4000`;
//     const responsePromise = fetch(url)
//     responsePromise.then((res)=> res.json())
//     .then((data)=>console.log(data))
//     console.log("hi")
// }

// makeRequest()


// asyn with await await keyword wait for the response from fetch and store the result in response 
// this async code will run in browsers code
async function makeAsyncRequest(){
    const url = `https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000`;
    const response =  await fetch(url)
    const data = await response.json()
    console.log(data)
    
}

makeAsyncRequest()

// the above code can be written as 
// async function makeAsyncRequest(){
//     const url = `https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000`;
//     const data = await( await fetch(url)).json()    
//     console.log(data)
    
// }

// makeAsyncRequest()


// this sync code wil stop the execution of the rest of the code
// function makeSyncRequest(){
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener('load',()=>{
//         console.log(xhr);
//     })
//     xhr.open("GET",'https://procodrr.vercel.app/?sleep=4000',false)
//     xhr.send()
// }



// function addTwoNumbers (){
//     return 5+8;
// }


// this code can be run using type = module
// const url = `https://procodrr.vercel.app/?sleep=4000`;
// const response =  await fetch(url)
// const data = await response.json()
// console.log(data)