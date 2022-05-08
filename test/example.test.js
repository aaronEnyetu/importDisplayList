// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderPlant, renderAnimal } from '../utils.js';
import { plants, animals } from '../data.js';

const test = QUnit.test;

test('test plant render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="plant"><h1>corn</h1><img src="./assets/corn.jpg"><p>corn is a cereal grain first domesticated in mexico about 10000BC years ago  </p><h2>Types</h2><ul><li>sweetcorn</li><li>flintcorn</li><li>popcorn</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlant(plants[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('test animal render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="animal"><h1>cattle</h1><img src="./assets/cattle.jpg"><p>cattle originate from taurus mountains and domesticated 10500 years ago</p><h2>classes</h2><ul><li>calves</li><li>heifers</li><li>cows</li><li>bulls</li><li>steers</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderAnimal(animals[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});