// import functions and grab DOM elements
import { plants } from './data.js';
import { renderPlant } from './utils.js';

const plantListElem = document.getElementById('plants');


for (let plant of plants) {
    const plantDiv = renderPlant(plant);
    plantListElem.append(plantDiv);
}

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
