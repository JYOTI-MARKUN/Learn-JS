const image = document.querySelector("img")
const button = document.querySelector("button")

// button.addEventListener("click",()=>{
//   fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(json => {
//     console.log("Got the data");
//     console.log(json.message);
//     image.src = json.message
//   })

// })


// function with new keyword: when we call a function using new keyword then it will return an object for us
// xhr = XMLHttpRequest() // a special type of function

button.addEventListener("click",()=>{
const xhr = new XMLHttpRequest()  // in old times data used to  transfer in this format
console.log(xhr);  // in this if api is slow we can get an empty response 

// to get response in object format without parsing it we can do this
xhr.responseType = 'json'

xhr.addEventListener("load",()=>{
console.log(xhr.response); // this will print when we get the response from the api

// to get the reposne in object format

// console.log(JSON.parse(xhr.response))


image.src = xhr.response.message

})  

// here open is a method and get is the type  of request we wanna send to the url
xhr.open("GET","https://dog.ceo/api/breeds/image/random")
// to send the request we need to send it
xhr.send()
})