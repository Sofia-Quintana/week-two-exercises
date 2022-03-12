//1.
//const car = require('./car');

//2. first way (referencing a property)
/* const items = require('./car');
const car = items.car; */

//2. second way
/* const car = require('./car').car; */

//2. third way (destructuring assignment)
const { car } = require('./car');

console.log(car);