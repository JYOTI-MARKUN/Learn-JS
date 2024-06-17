const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
// document.querySelector("body > div > img").classList.add("img") // adding a class name to img
// const firstImg = document.querySelector(".img")


// for (let i =2;i<=100;i++){
//    const cloneimg =  container.appendChild(firstImg.cloneNode(true)).src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

// }



// using document.create element when we do not have a element in the starting we use document. create element

// using create element we can create not only html element but can element we want it will create html element of the argument we pass
// the elemnt that we create ourslef is inlin element

const para = document.createElement("p");
// para.innerText = "hellow";
// para.classList.add("my-para");
// para.id ="paragraph"
// container.appendChild(para);


// const newImage = document.createElement("img");

// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`;

// container.appendChild(newImage);


for (let i = 1 ; i<=100;i++){
   const newImage = document.createElement("img");
   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png `;
   container.append(newImage);
}






