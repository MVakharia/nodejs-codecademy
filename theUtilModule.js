const util = require("util");

//Queries a database for a specified user ID.
//Takes 2 params, 'id' and 'callback'.
function getUser(id, callback) {
    //Sets a timer which executes code once the timer expires.
    return setTimeout(() => {
        //If the ID is 5, run 'callback()'.
        //'null' is passed in as the error (because there is no error).
        //A key-value pair is passed in as the user: a key of 'nickname' and a value of 'Teddy'.
        if(id === 5) {
            callback(null, {nickname: 'Teddy'});
        }
        //If the ID is not 5, run 'callback' with only one param: an Error().
        else {
            callback(new Error('User not found'));
        }
    }, 1000)
}

function callback (error, user) {

    if(error) {

        console.error(error.message);

        //Terminates the program with error code 1.
        //Error code 0 indicates success and is the default error code for a successful program.
        process.exit(1);
    }

    console.log(`User found! Their nickname is ${user.nickname}`);

}

getUser(1, callback);

getUser(5, callback);

/*

const getUserPromise = util.promisify(getUser);

getUserPromise(id).then((user) => {
    console.log(`User found! Their nickname is: ${user.nickname}`);
}).catch((error) => {
    console.log('user not found, error');
});

getUser(1);

getUser(5);

*/




