// Assignment

// let c = 10
// c = 20
// console.log(c)
// //------------------------
// var i = 90 
// i = 100
// console.log(i)
// //------------------------
// const yu = 50
// yu = 100
// console.log(yu)

// scope ------

// let h = 10  // available for complete script
// {
//     console.log(h) //10
// }

// console.log(h) // 10
 
// let keyword scope is blocked


// {
//     let h = 10 
//     console.log(h) // 10
// }

// console.log(h) // not defined


// funcitiom scoped 
// {
//     var h = 10 
//     console.log(h) // 10
// }

// console.log(h)


// const let (scope -- Block scope)


// {
//     const hhh = 1000
//     console.log(hhh)

// }

// console.log(hhh)
// let and var are similar for assignment 
// const we can re-assign the value 
// let and const are same with respect to scope
// (both are bloced scope)


// var is functioned scope

// console.log("hello")

// // account - 0
// // account -0
// //score -0

// //variable


// // Arithmetic operation


// // + - * / %    -------- 73%5   --- 3



// let x = 100
// let y = 50

// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)

// let u = 20
// let v = 12


// console.log('------------------')
// console.log(u + v)
// console.log(u - v)
// console.log(u * v)
// console.log(u / v)
// console.log(u % v)

// // DRY - donot repeat yourself

// console.log('**************')


// //keyword // functionName  // parameter
// function calculator(x, y) { // blocks
//     console.log(x + y)
//     console.log(x - y)
//     console.log(x * y)
//     console.log(x / y)
//     console.log(x % y)

//     // statements
// }

// calculator(50,25) // function call   // actual values arguments
// calculator(20,15)
// calculator(200000,15000)


//-----------------------------------------------

let one = 10
let two = 20

console.log(one+two)
console.log(one-two)
console.log(one*two)
console.log(one/two)
console.log(one%two)

let onea = 10
let twob = 20

console.log(onea+twob)
console.log(onea-twob)
console.log(onea*twob)
console.log(onea/twob)
console.log(onea%twob)


//--------------------------------------->

// function declaration


// function functioName(paramOne,paramTwo){ // blocks

//     //console.log(g+e)

// }

console.log('------------------------')

function calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}

// call 
calculator(100,20) // arguments
console.log('-----------------')
calculator(1000,200)

//-------------------------


// def calculator(x,y):
//     print(x+y)

// calculator(12,13)
// function declaration 



// functions 
// function without parameter and without return type

// function add(){
//     console.log(3+5)
// }
// add()
// add()

// function with parameter and without return type 

// function add(x,y){
//     console.log(x+y)
// }
// add(100,50)
// add(33,17)

// function with parameter and with return type
// function add(x,y){
//     return x+y
// }

// let g = add(122,11)
// console.log(g)
// console.log(g+50)
// console.log(g*0.10)
// console.log(g-200)
// --------------------------------->

// function  declartion
// function add(x,y){
//     return x+y
// }
// let r = add(12,13)
// console.log(r) // 25

//------------------------
// function expression

let add = function (x,y){
    return x+y
}
let r = add(12,13)
console.log(r) // 25


// arrow 

// let add =  (x,y)=>{
//     return x+y
// }
// let r = add(12,13)
// console.log(r) // 25


let add =  (x,y)=>x+y
let r = add(12,13)
console.log(r) // 25
console.log(r+10) // 25






















