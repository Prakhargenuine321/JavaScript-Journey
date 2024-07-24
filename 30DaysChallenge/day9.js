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


//Task4

const ul = document.querySelector('ul');

const li = document.createElement('li');
li.appendChild(document.createTextNode('Pranayam'));

ul.appendChild(li);


//Task5

// li.remove();


//Task6

const lastChild = document.querySelector('li:last-child');
lastChild.remove();


//Task7

const image = document.querySelector('.image');

setInterval(function(){
    image.style.backgroundImage = "url('https://images.unsplash.com/photo-1469719847081-4757697d117a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
} , 2000);


//Task8

const button = document.querySelector('.button');

button.addEventListener('click' , function(){
    let image = document.querySelector('.image');
    image.classList.remove('image');
})

const buttonOne = document.querySelector('.buttonOne')

buttonOne.addEventListener('click' , function(){
    let image = document.querySelector('.image-container > div')
    image.classList.add('image');
})


//Task9

const buttonTwo = document.querySelector('.button-two');

const para = document.querySelector('p');

buttonTwo.addEventListener('click' , function(){
    para.innerText = "Hello Ji I changed a lot !";
    para.style.fontFamily = "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    para.style.fontSize = "2rem";
})


//Task10

const border = document.querySelector('.border');

// border.onmouseover = function(){
//     border.style.borderColor = "black";
// }

border.addEventListener( 'mouseover' , function(){
    border.style.borderColor = "black";
})

border.addEventListener( 'mouseout' , function(){
    border.style.borderColor = "lightCoral";
})

