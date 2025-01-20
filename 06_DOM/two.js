const parent = document.querySelector(".parent")
// console.log(parent);
// console.log(parent.children[0].innerText);   // --> return html collection

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerText)
// }

parent.children[0].style.backgroundColor = "orange";

//first Element of the target class
// console.log(parent.firstElementChild);

//last Element of the target class
// console.log(parent.lastElementChild);


//now child to parent
const childOne = document.querySelector(".day");
// console.log(childOne)
// console.log(childOne.parentElement)

//sibbling
// console.log(childOne.nextElementSibling)

console.log("NODES:" , parent.childNodes) //this will  give a complex tree structure of all the nodes