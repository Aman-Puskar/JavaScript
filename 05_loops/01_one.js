//for
const array = [1, 2, 3, 4, 5, 6, 7];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
        
}
//break and continue;

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         break;
//     }
    
//     console.log(i);
   
// }

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;   //skip that particular  i teration
    }
    
    console.log(i);
   
}
 