
// // err is an object
// try{
//     console.log(a);
// }catch(err) {
//     console.log(err);
//     console.log(typeof err);
//     console.dir(err)  // reference error
// }


// console.log(3+7);


// // typeError

// const user ={
//     name:"jyoti",
//     age:26,

// }



// try{
//     console.log(user.address.city)
// } catch(err){
//     console.log(err);
//     console.dir(err)
//     console.dir(err.message)
// }finally{
//     console.log("hellow this is finally block")
// }

// console.log("hellow js")


// try and catch mostly used with async code

async function makeAsyncRequest(){
try{
    const url ='https://procodrr.vercel.app/?sleep=5000';
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}catch(err){
    console.log(err)
    console.log("something went wrong")
}
console.log("hellow")
}

makeAsyncRequest()