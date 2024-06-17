// first  .then method in fetch will give a object that include data and headers so to get actual data from the fetch api we use another .then method in it

// fetch('https://dummyjson.com/products').then((res)=>{
// res.json() // res,json() returns a promise
// .then((data)=>{
//   console.log(data)
// })
//    })

// .then returns a promise and if it is returning a value then that value is also inclosed in the form of a promise

// the above code can be written more correctly as

// fetch('https://dummyjson.com/products')
// .then((res)=>{
// return res.json()
// }).then((data)=>{
// console.log(data)
// })

// above can be return as implesit return , by default it sends a get request

// fetch('https://dummyjson.com/products')
// .then((res)=> res.json())
// .then((data)=> console.log(data))
// .catch((err)=>{console.log(err)})

// POST REQUEST

fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" }, // headers do not required all the time
  body: JSON.stringify({
    title: "BMW Pencil",
    category: "stationary",
    /* other product data */
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  }) // this code also be written as .then(console.log) as console.log is a fucntion itself
  .catch((err) => {
    console.log(err);
  });

// makeHttpRequest("GET",`https://dummyjson.com/users`)
// .then((userData)=>  makeHttpRequest("GET",`https://dummyjson.com/posts/user/${userData.users[0].id}`)
// ).then((postData)=> makeHttpRequest("GET",`https://dummyjson.com/comments/post/${postData.posts[0].id}`)
// ).then((commentsData)=> makeHttpRequest("GET",`https://dummyjson.com/users/${commentsData.comments[0].user.id}`)
// ).then((userData)=>   console.log(userData)
// ).catch((err)=> console.log(err))

// fetch(`https://dummyjson.com/users`)
// .then((res)=> res.json())
// .then((userData)=>{
//     console.log(userData)
//     fetch(`https://dummyjson.com/posts/user/${userData.users[0].id}`)
//     .then((res)=> res.json())
//     .then((postData)=>{
//        console.log(postData)
//        fetch(`https://dummyjson.com/comments/post/${postData.posts[0].id}`)
//        .then((res)=>res.json())
//        .then((commentsData)=>{
//         console.log(commentsData)
//         fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`)
//         .then((res)=>res.json())
//         .then((userData)=>console.log(userData))
//     })
//     })}
// )
