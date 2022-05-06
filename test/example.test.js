// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderPlant } from '../utils.js';
import { plants } from '../data.js';

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
