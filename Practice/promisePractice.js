//This will log the message to the console even if it isn't called.
const promise0 = new Promise((resolve, reject) => {
   console.log("I wasn't called but I'm still logging to the console.");
});

//This promise will never resolve as there is no 'resolve' or 'reject'.
const promise1 = new Promise((resolve, reject) => {
    return("I need to be called in order to log to the console.");
})

//Returns 'Promise { pending }'
console.log(promise1);

const promise2 = new Promise((resolve, reject) => {
    resolve('I\'m resolved!');
});

//Any functions passed to a Promise are executed upon creation of the Promise.

//This is why promise0 works.

console.log(promise2);

const promise3 = new Promise((resolve, reject) => {
   const bool = false;

   if(bool) {
       resolve("Succeeded!");
   }
   else {
       reject("Failure");
   }
});

promise3.then(() => console.log(` Success!`)).catch(() => console.log("Failure!"));

//promise3.then(() => console.log("You have succeeded."));



const promise4 = new Promise((resolve, reject) => {

});











