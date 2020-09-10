// symbols...

const symbolOne = Symbol('a generic name');
// notice we don't have any new keyword..this is because
// Symbol() is not an Object, it is a primitive...
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, typeof symbolOne);

const ninja = {};

ninja.age = 30;
ninja['belt'] = 'orange';
//override ninja['belt']
ninja['belt'] = 'black';

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';



console.log(ninja);