const heros = ["hulk", "thor", "ironman"];
const vilian = ["thanons", "seid", "goblin"];
// heros.push(vilian); //add an array of villian as a element;
// console.log(heros);
// console.log(heros[3][1]);
// const newArr = heros.concat(vilian); //concat mergres the array and return the new merged array;
// console.log(newArr);

const allnew = [...heros, ...vilian]; //glass broke and spread;
// console.log(allnew);

const arr = [1,2,3,[4,5,6],[8,9,[99]]]; 
const finalarr = arr.flat(Infinity); // merge all the subarray within the array;
// console.log(finalarr);

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman")); //creates as array of aman;
let a = 12;
let b = 44;
let c = 99;
console.log(Array.of(a ,b, c)); //makes array of variables;


