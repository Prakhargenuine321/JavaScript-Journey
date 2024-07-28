//Task1

const changeText = document.querySelector('.change-text');
const changeTextButton = document.querySelector('.change-text-button');

changeTextButton.addEventListener('click' , function(){
    changeText.textContent = "Hello Ji Changed";
})


//Task2

const image = document.querySelector('.image');

let scale = true;
image.addEventListener('dblclick' , function(){
    if(scale){
        image.style.scale = 2;
        scale = false;
    }else if(!scale){
        image.style.scale = '';
        scale = true;
    }
})


//Task3

const chanColor = document.querySelector('.change-color');

chanColor.addEventListener('mouseover' , function(){
    chanColor.style.backgroundColor = "#212121";
})


//Task4

chanColor.addEventListener('mouseout' , function(){
    chanColor.style.backgroundColor = '';
})


//Task5

const inputField = document.querySelector('.input-field');
// inputField.addEventListener('keydown' , function(e){
//     console.log(e.key + e.code);
// })


//Task6

const keyUpPara = document.querySelector('.keyup-event');

inputField.addEventListener('keyup' , function(){
    const currentValue = inputField.value;
    keyUpPara.textContent = currentValue;
})


//Task7

const formSub = document.querySelector('.form-sub');
const userInput = document.querySelector('.check-field');

formSub.addEventListener("submit" , function(e){
    e.preventDefault();
    console.log(userInput.value);
})


//Task8

const select = document.querySelector('.code-lang');
const displayValue = document.querySelector('.label');

select.addEventListener('change' , function(event){
    displayValue.textContent = `Your preferred programming language is: ${event.target.value}`;
})


//Task9

const listItems = document.querySelector('.list-items');

listItems.addEventListener('click' , function(event){
    console.log(event.target.textContent);
})


//Task10

const inputList = document.querySelector('.input-list');

const dynamicListAdd = function(){
    const newList = document.createElement('li');
    newList.textContent = `${inputList.value}`;
    listItems.appendChild(newList);
    inputList.value = '';
}

const addListItem = document.querySelector('.add-list-item');
addListItem.addEventListener('click' , dynamicListAdd);