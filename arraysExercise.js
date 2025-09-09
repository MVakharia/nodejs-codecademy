const myName = "Michael";

const myNameArray = Array.from(myName);

console.log(myNameArray);

//Array.from converts an array-like object, or iterable object, into an array.

//It also optionally transforms each item with a mapFunction.

//Array.from takes two parameters: the iterable object, and the map function.

const helloWorld = "Hello World!";

const helloWorldArray = Array.from(helloWorld);

console.log(helloWorldArray);

const helloWorldSpaced = Array.from(helloWorld, x => x + ' ').join('');

console.log(helloWorldSpaced);

const numbers = [1, 2, 3, 4, 5];

const numbersArray = Array.from(numbers);

//Since 'numbers' is already an array, this doesn't do anything.
console.log(numbersArray);

//This will square the numbers.
const numbersSquared = Array.from(numbers, x => Math.pow(x, 2));

console.log(numbersSquared);

const arrayLike = {length: 5};

const arrayLikeArray = Array.from(arrayLike);

console.log(arrayLikeArray);

const emptyArray = new Array(5);

console.log(emptyArray);


