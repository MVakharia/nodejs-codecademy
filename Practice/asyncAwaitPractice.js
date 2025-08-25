async function getCookies () {
    return("Cookies acquired.");
}

console.log(getCookies());

async function getLunch () {
    return("Lunch is acquired.");
}

console.log(getLunch());

async function snackTime() {
    const cookies = await getCookies();

    console.log(cookies);
}

setTimeout(() => {console.log("Time for cookies!")}, 5000);

snackTime().then(() => console.log("We got the cookies."));

setTimeout(() => {console.log("Still waiting to eat the cookies.")});




















