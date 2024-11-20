const score = 400;
// console.log(score);
const balance = new Number(400);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //number of digits after the decimal

const otherNumber = 4348.847747;

// console.log(otherNumber.toPrecision(5)); //return the value to precised digits first give the priority to the digits before the decimal.(round off to the precised value;)

const hundred = 10000000;
// console.log(hundred.toLocaleString('en-IN')); //return the values with the commas so the value can be readed easily and initially it add commas as per the US currency.



//******************************************************** MATHS  *******************************************/
// console.log(Math);
// console.log(Math.abs(-343));
// console.log(Math.round(44.232));


//Math.random() will always give values from 0 to 1;
console.log(Math.round(((Math.random()*100) + 1)));

const min = 30;
const max = 50;
console.log(Math.floor(((Math.random() * (max - min) + 1)) + min));