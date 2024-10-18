// const myDate = new Date();
// console.log(typeof(myDate)); //it is a object.
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());


// const newDate = new Date(2004, 9, 21);
// console.log(newDate.toDateString());


let calander = new Date("2004-10-21")   //(yy-mm-dd); but prefred (mm-dd-yy);
// console.log(calander.toLocaleString());

const myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(calander.getTime()); //time in mili seconds from the calender

console.log(calander.getDay());