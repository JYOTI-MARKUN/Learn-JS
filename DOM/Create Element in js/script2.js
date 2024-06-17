const container  =document.querySelector(".container");

for (let i=1;i<=10;i++){
    const imgContainer = document.createElement("div");
imgContainer.classList.add("img-container");

// one method  

// const myHTML = `
// <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
// <p>${i}</p>`
// imgContainer.innerHTML = myHTML

// second method
const newImage = document.createElement("img");
newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

const para = document.createElement("p");
para.innerText = i;

imgContainer.append(newImage,para);


// to appned it inside cotainer
container.append(imgContainer);
}

