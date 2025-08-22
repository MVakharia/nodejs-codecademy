const errorFirstCallback = (err, data) => {
    if(err) {
        console.log(`There WAS an error: ${err}`);
    }
    else {
        console.log(`There was NO error. Event data: ${data}`);
    }
}

