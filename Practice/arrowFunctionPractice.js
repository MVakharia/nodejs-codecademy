const myPromise = new Promise((resolve, reject) => {
   return ("Hello World!");
});

//Returns 'Promise { pending }'.
console.log(myPromise);

const hi = () => "Hello World!";

const hi0 = "Hello Worlds!";

console.log(hi());

console.log(hi0);

const bye = () => "Goodbye World!";

console.log(bye());

const date = () => Date();

console.log(date());

const japanTime = new Date().toLocaleTimeString('en', {
    timeZone:'Asia/Tokyo'
});

console.log(`The time in Japan is ${japanTime}`);

const greet = (name) => `Hello, ${name}!`;

console.log(greet('Michael'));

const gameConsole = () => "PlayStation 5";

console.log(gameConsole());

const monitorBrand = () => "AOC";

console.log(monitorBrand());

const deskBrand = () => "IKEA";

console.log(deskBrand());

const add2 = (num = 0) => num + 2;

console.log(add2(5));

const doubleNumber = (num = 0) => num * 2;

console.log(doubleNumber(78));

const catchPokemon = (pokemon = "") => `${pokemon} has been caught.`;

console.log(catchPokemon("Lugia"));

const chargePhone = (phone = "") => `${phone} has been charged to 100% capacity.`;

console.log(chargePhone("Xperia Z2"));







