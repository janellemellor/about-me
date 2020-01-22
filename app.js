import isYes from '../src/isYes.js';

// grabbing elements from HTML/DOM
const results = document.getElementById ('results');
const button = document.getElementById('button');

// Add a function to call on click of the quiz button
button.addEventListener('click', () => {

    // launch a prompt for text user input
    const name = prompt ('What is your name?');

    // launch a confirmation prompt (string interpolation --putting variable inside a string)
    const check = confirm (`${name}, are you sure you want to take the quiz?`);

    // break the function if they click cancel
    if (check === false) return;

    // three more prompts
    const qOne = prompt ('Is Janelle`s dog`s name Fox?');
    const qTwo = prompt ('Has Janelle lived in Boston?');
    const qThree = prompt ('Does Janelle like hiking?');

    // Starting a count at zero (counter is a state)
    let counter = 0;

    // incrememting the count is the answer is Yes or Y
    if (isYes(qOne)) counter += 1;

    // incrementing the count if the answer is yes or Y
    if (isYes(qTwo)) counter += 1;
    
     // incrementing the count if the answer is yes or Y
    if (isYes(qThree)) counter += 1;
    
    // Results display as a percent
    results.textContent = 'Congratulations ' + name + ', you got ' + (counter / 3) * 100 + '% correct!';

    // if all three answers are correct, add class results to add rainbow background 
    if (counter === 3) { 
        
        results.classList.add('results');

    } 
      
});



