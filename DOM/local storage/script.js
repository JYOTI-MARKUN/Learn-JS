const namehead = document.querySelector(".name-head");
const inputValue = document.querySelector(".inputvalue");
const agehead = document.querySelector(".age-head");
const ageValue = document.querySelector(".agevalue");

// namehead.innerText = localStorage.name;

// this is not considered as good practice
// inputValue.addEventListener("input",(e)=>{
//    localStorage.name = e.target.value;
//    namehead.innerText = localStorage.name;
// })


// to get and set valuewe used this method
// namehead.innerText =  localStorage.getItem('name');

// inputValue.addEventListener("input",(e)=>{
//     localStorage.setItem("name",e.target.value);
//     namehead.innerText = localStorage.getItem('name');
// })


// diffrence betwwen accessing the both is that if we try to access  one hive us null and otther give us undefined

// localStorage.age // undefined
// localStorage.getItem('age')// null
// agehead.innerText = localStorage.getItem("age");

// ageValue.addEventListener("input",(e)=>{   
//     localStorage.setItem("age",e.target.value);
//     agehead.innerText = localStorage.getItem("age");

// })


// NOTE : TO CONVERT AN OBJECT INTO STRING WE DO THIS
// JSON.stringify(OBJECTNAME);
// TO CONVERT STRING BACK TO Object WE DO this
// JSON.parse(wholestring)


// storing object in local storage (we can store only strings in localStorage)
const myData = JSON.parse(localStorage.getItem('myData')) || {
name:'',
age:''
};  // here first value if we already have some data in our local storage and as the data is in string format we have to convert it into object format so 

// for name
inputValue.addEventListener("input",(e)=>{
      myData.name = e.target.value;
      localStorage.setItem("myData",JSON.stringify(myData));
      namehead.innerText = e.target.value;
});


// for age
ageValue.addEventListener("input",(e)=>{
    myData.age = e.target.value;
    localStorage.setItem("myData",JSON.stringify(myData));
    agehead.innerText = e.target.value;
});
0
namehead.innerText = myData.name;
agehead.innerText = myData.age;


// clear local storage
localStorage.clear() // to clear all
localStorage.removeItem() // removig single item