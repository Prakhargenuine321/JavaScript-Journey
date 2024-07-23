//Task1

const container = document.querySelector('#container');

// container.innerHTML = "Hum Badal Gaye";
// container.textContent = "Hum Badal Gaye";
// const span = document.querySelector('span');
// span.style.display = "none";


//Task2

const thisContainer = document.querySelector('.this');

thisContainer.style.backgroundColor = "#212121";


//Task3

const body = document.querySelector('body');

const divEle = document.createElement('div.text');
divEle.appendChild(document.createTextNode("I have been created using JS"));
body.appendChild(divEle);