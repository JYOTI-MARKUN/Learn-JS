// http://dummyjson.com/users : api for this file


// //  https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=4000  : SLOW API

function makeHttpRequest (method,url,callback){
    const xhr = new XMLHttpRequest()

    xhr.responseType = "json";
   
    xhr.addEventListener("load",()=>{
    //    console.log(xhr.response);
    //    callback("jyoti")
       callback(xhr.response)   

    })
   
    xhr.open(method,url)
    xhr.send()
}

makeHttpRequest("GET",'http://dummyjson.com/users',(usersData)=>{
    console.log(usersData.users[0].id)
    makeHttpRequest("GET",`http://dummyjson.com/posts/user/${usersData.users[0].id}`,(postsData)=>{
        console.log(postsData.posts[0].id)
        makeHttpRequest("GET",`https://dummyjson.com/comments/post/${postsData.posts[0].id}`,(commentsDate)=>{
            console.log(commentsDate.comments[0].user.id)
            makeHttpRequest("GET", `http://dummyjson.com/users/${commentsDate.comments[0].user.id}`,(userIdData)=>{
                console.log(userIdData)
            })
        })
    })
})


