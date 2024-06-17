// ACCESSING PARENT SIBLING AND CHILD ELEMENT USING JS

// to get the parentElement
const firstLink = document.querySelector("a")
firstLink.parentElement.parentElement.parentElement // this will give html element which is the biggest element
firstLink.children // this will give child element
firstLink.nextElementSibling.nextElementSibling.nextElementSibling // to get next element sivling and it will give null if there is no next sivling
firstLink.previousElementSibling // to get the previous element sivling and will give null if there is no previous sivling

// DIFFERENCE BETWEEN ELEMENT AND NODE

