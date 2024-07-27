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