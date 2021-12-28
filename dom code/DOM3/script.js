

// selecting the element 
// <h1  id = "hello">Hello</h1>

//let headingOne = document.querySelector('h1') //   <h1 id="new">HeadingOne</h1>
// console.log(headingOne)
// headingOne.textContent = "ram"
// headingOne.style.color = "green"



// let human = {
//     age:12,
//     fullName:"chinmay deshpande"
// }

// human.age = 23


// let headingOne = {
//     textContent:"HeadingOne",
//     style:{
//         color:'green',
//         backgroundColor:'red'

//     }

// }


let headingOne = document.querySelector('h1')
let button = document.querySelector('button')
let inputText = document.querySelector('input')

console.log(headingOne)
console.log(button)
console.log(inputText)
button.addEventListener('click', function(){
    headingOne.style.color = inputText.value
})
