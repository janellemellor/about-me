import compareNumbers from '../compareNumbers.js';

const button = document.getElementById('button');
const input = document.getElementById('number-input');
const triesRemaining = document.getElementById('tries-remaining');
const highLow = document.getElementById('high-low');
const results = document.getElementById('results');


// random number from MDN
const correctNumber = Math.floor (Math.random() * (20 - 1 + 1)) + 1; 
let numberOfGuesses = 5;

button.addEventListener ('click', () => {
    
    const guess = Number(input.value);
    const compare = compareNumbers(guess, correctNumber);

    if (compare === -1) {
        highLow.textContent = 'Too Low!';
        numberOfGuesses--; 
    } 

    else if (compare === 1) {
        highLow.textContent = 'Too High!';
        numberOfGuesses--;    
    }

    else if (compare === 0) {
        results.textContent = 'You Win!';
        button.disabled = true;
    }


    if (numberOfGuesses === 0) {
        results.textContent = 'You Lose!';
        button.disabled = true;
    }

    triesRemaining.textContent = numberOfGuesses;
});