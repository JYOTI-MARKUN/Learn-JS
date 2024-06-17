let container = document.querySelector('.container')

for(let i = 1; i <= 100; i++) {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p')
    paragraph.innerText = i

    imgContainer.append(newImage, paragraph)
    container.append(imgContainer)
}

// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML


// REMOVE AND REMOVE CHILD
// using remove we can remove a element directly by calling remove function
// let fourthImg = document.querySelector("body > div > div:nth-child(4)");
// fourthImg.remove();

// using removeChild we have to first go to the parent of the removing element and then pass the element we wanna remove as a parameter to the function
// let fifthImg = document.querySelector("body > div > div:nth-child(5)");
// fifthImg.parentElement.removeChild(fifthImg);  // see the 6th one


// NOTE : ONE THING TO NOTE HERE IS THIS THAT WE NEED TO STORE THE REMOVING ELEMENT INTO A VARIBLE USING LET AND THEN REMOVE IT AS REMOVING DIRECTLY WILL NOT REOVE IT FROM THE MEMORY
