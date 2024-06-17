function makeHttpRequest(method, url) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    
    const promise = new Promise((resolve,reject)=>{    
        xhr.addEventListener('load', () => {
          resolve(xhr.response)
        })
        xhr.addEventListener("error",()=>{
            reject ("request failed")
        })
    })

  
    xhr.open(method, url)
    xhr.send()

    return promise
  }
  
//   makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//     makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//       makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//         makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
//           console.log(userData);
//         });
//       });
//     });
//   })

makeHttpRequest("GET",`https://dummyjson.com/users`)
.then((userData)=>{
 console.log(userData.users[0].id);
 return makeHttpRequest("GET",`https://dummyjson.com/posts/user/${userData.users[0].id}`)
}).then((postData)=>{
console.log(postData)
return makeHttpRequest("GET",`https://dummyjson.com/comments/post/${postData.posts[0].id}`)
}).then((commentsData)=>{
  console.log(commentsData)
  return makeHttpRequest("GET",`https://dummyjson.com/users/${commentsData.comments[0].user.id}`)
}).then((userData)=>{
  console.log(userData)
})


// the above code can be return as 


makeHttpRequest("GET",`https://dummyjson.com/users`)
.then((userData)=>  makeHttpRequest("GET",`https://dummyjson.com/posts/user/${userData.users[0].id}`)
).then((postData)=> makeHttpRequest("GET",`https://dummyjson.com/comments/post/${postData.posts[0].id}`)
).then((commentsData)=> makeHttpRequest("GET",`https://dummyjson.com/users/${commentsData.comments[0].user.id}`)
).then((userData)=>   console.log(userData)
).catch((err)=> console.log(err))


