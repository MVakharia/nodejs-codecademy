//Creates a new buffer of size 5.
const buffer = Buffer.alloc(5);

const fill = 16;

const buffer0 = Buffer.alloc(3, fill, 'utf8');

//Logs '<Buffer 00 00 00 00 00>' to the console.
console.log(buffer);

//Logs the buffer with the 'fill' as the two-digit number in every slot.
//The number 16 is represented as '10' in hexadecimal,
//so the buffer will show '10 10 10'.
console.log(buffer0);

const buffer1 = Buffer.alloc(10, 'ha');

console.log(buffer1.toString());

//Converts the string into individual bytes and populates the buffer with those bytes.
const buffer2 = Buffer.from('hello');

console.log(buffer2);

const buffers = [buffer1, buffer2];

const concatenatedBuffers = Buffer.concat(buffers);

console.log(concatenatedBuffers);

console.log(concatenatedBuffers.toString());