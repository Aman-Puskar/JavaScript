//comparsion and equality operators performs differently. comparison operatior converts the null to a number that is 0 and then 
//compares
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0); //that is why this is giving the answer true.

console.log(undefined == 0);  //undefined will always give answer 'false' to every comparison operator.

//note-->
// === strict comparison  , it will check the data type as well as value.

