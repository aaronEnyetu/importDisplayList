// import functions and grab DOM elements
import { plants, animals } from './data.js';
import { renderPlant, renderAnimal } from './utils.js';

const plantListElem = document.getElementById('plants');
const animalListElem = document.getElementById('animals');

// let state

//displayAll();
//function displayAll() {
   // displayPlantList();
  //  displayAnimalList();
//}

//function displayPlantList() {
    for (let plant of plants) {
        const plantDiv = renderPlant(plant);
        plantListElem.append(plantDiv);
    }
//}

//function displayAnimalList() {
    for (let animal of animals) {
        const animalDiv = renderAnimal(animal);
        animalListElem.append(animalDiv);
    }
//}


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
