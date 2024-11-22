//destructuring of the object;

const course = {
    courseName : "DSA Course",
    price : "4000rs",
    duration : "40hrs",
    faculty : "Aman Puskar"

}
//when we have to get the any values multiple times then instead of writing object.key again and again we use this;

const {faculty} = course; //by this we can use this as many time as we want;

//destructure of the object;
const {faculty : f} = course; //faculty will be treated as f ;
// console.log(faculty);
console.log(f);

