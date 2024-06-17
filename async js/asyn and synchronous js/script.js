const image = document.querySelector("img");
const button = document.querySelector("button");
const blockingButton = document.querySelector(".blocking-btn");


// button.addEventListener("click",()=>{
//    fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(json => {  
//      console.log(json.message)  
//      image.src = json.message
//   })

// })

// this is an asynchronous code it will not block the other code of the js

// button.addEventListener("click",()=>{
//     const xhr = new XMLHttpRequest()
//     console.log(xhr.response);

//     // xhr.responseType = "json";

//     xhr.addEventListener("load",()=>{
//         image.src = JSON.parse(xhr.response).message
//         console.log(xhr.response);

//     })

//     xhr.open("GET","https://dog.ceo/api/breeds/image/random")
//     xhr.send()
// })


// we can make the asynchronous code synchronous (by adding false as the third argument)

button.addEventListener("click",()=>{
    const xhr = new XMLHttpRequest()
    console.log(xhr);
    // console.log(xhr.response);


    xhr.addEventListener("load",()=>{
        console.log(xhr);
        // console.log(xhr.response);

    })

    xhr.open("GET","https://procodrr.vercel.app/?sleep=1000",false)
    xhr.send()
})




// setTimeout(()=>{
//   console.log("hi")
// },4000)

// bloking the js brain : below code will block the js brain for the 4 second understand the code carefully, this is an example of synchronous js

// blockingButton.addEventListener("click",()=>{
//     const startTime = Date.now()
//     let currenTime = startTime

//     while (startTime + 4000 > currenTime){
//         // console.log("current time updated")
//         currenTime = Date.now()
//     }
// })