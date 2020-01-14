import isYes from '../src/isYes.js';

const results = document.getElementById ('results');
const button = document.getElementById('button');


button.addEventListener('click', () => {
    const name = prompt ('What is your name?');
    const check = confirm (`${name}, are you sure you want to take the quiz?`);
    if (check === false) return;

    const qOne = prompt ('Is Janelle`s dog`s name Fox?');
    const qTwo = prompt ('Has Janelle lived in Boston?');
    const qThree = prompt ('Does Janelle like hiking?');

    let counter = 0;
    if (isYes(qOne)) counter += 1;
    if (isYes(qTwo)) counter += 1;
    if (isYes(qThree)) counter += 1;
    
       
    results.textContent = 'Congratulations ' + name + ', you got ' + (counter / 3) * 100 + '% correct!';


    if (counter === 3) { 
        console.log(counter);
        results.classList.add('results');

    } else {
        console.log(counter);
      
    }
});



