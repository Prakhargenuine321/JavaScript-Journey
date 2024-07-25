const guessHai = document.querySelector('.guessField');

guessHai.addEventListener('mouseover' , function(){
    guessHai.style.borderColor = "#34eba8";
})

guessHai.addEventListener( 'mouseout' , function(){
    guessHai.style.borderColor = "";
})


//random number generation

let randomNumber = parseInt(Math.random() * 100 + 1);

//selecting the required elements

const userInput = document.querySelector('.guessField');

const submit = document.querySelector('.subt');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;
let playGame = true; 


if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}


//validating the input as per given criteria
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    } else if(guess < 1){
        alert("Please enter a number greater than or equal to 1");
    } else if(guess > 100){
        alert("Please enter a number lesser than or equal to 100");
    } else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


//check guess -->prints message that guess is right or wrong
function checkGuess(guess){
    if(randomNumber ===guess){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage('Guessed value is lower');
    }else{
        displayMessage('Guessed value is higher');
    }
}


//clean values, update guess arrays and also update number of guess left
function displayGuess(guess){
    userInput.value = ''; //cleaning up the value already entered to get ready for next turn
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}


//below will directly interact with DOM print value is low or high
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}


function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click' , function(e){
        //first of all reset all variables then start the game
        parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p); 
        playGame = true;
    })

}