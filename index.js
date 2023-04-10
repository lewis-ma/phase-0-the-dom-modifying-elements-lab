// Write your code here!// get the existing element with id "main"
const main = document.querySelector('#main');

// create a new h1 element
const newHeader = document.createElement('h1');

// set the id of the new h1 element to "victory"
newHeader.id = "victory";

// set the text content of the new h1 element to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion";

// replace the existing element with id "main" with the new h1 element
main.replaceWith(newHeader);