const name = "Aman";
//another way to creat string.
const gameName = new String("Clash Of Clans");
const repoCount = 9;
// console.log(name+repoCount+ "value");

//use back ticks;  (String interpulation)

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
console.log(`${gameName}`);

//key value pairs in Stings
console.log(gameName[0]);
//prototype of the string
console.log(gameName.__proto__);
//some of the objects.
console.log(gameName.length);
console.log(gameName.toUpperCase()); //it will not change the original string as string is the primitive data type and value is given as a copy not the original one.
console.log(gameName.charAt(6));
console.log(gameName.indexOf('l'));
/*
trim - remove the extra white spaces
slice - returns the ans of particular range also include the negative values and it will start from end .
replace - replace something with something.
includes - to check whether it contains or not.
split - split on the basis of something.
*/