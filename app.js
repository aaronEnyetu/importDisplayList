// import functions and grab DOM elements
import { plants } from './plants.js';
import { animals } from './animals.js';
import { minerals } from './minerals.js';
import { renderPlant } from './utils.js';
import { renderAnimal } from './utils.js';
import { renderMineral } from './utils.js';

const plantListElem = document.getElementById('plants');
const animalListElem = document.getElementById('animals');
const mineralListElem = document.getElementById('minerals');

// let state





for (let plant of plants) {
   // plantListElem.textContent = '';
    const plantDiv = renderPlant(plant);
    plantListElem.append(plantDiv);
}


for (let animal of animals) {
    const animalDiv = renderAnimal(animal);
    animalListElem.append(animalDiv);
}

for (let mineral of minerals) {
    const mineralDiv = renderMineral(mineral);
    mineralListElem.append(mineralDiv);
}



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
