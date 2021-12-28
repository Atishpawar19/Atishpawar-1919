// //         0         1     2      3      4 

// let f = ["chinmay","ram","sham","java","India"]
// //      -5         -4      -3        -2      -1


// console.log(f[0]) // chinmay

// // pop push shift unshift indexOf includes slice 
// // action return 

// console.log(f.indexOf("ram"))
// console.log(f.slice(1,4))
// console.log(f.slice(2,5))
// console.log(f.slice(-4,5))
// console.log(f.slice(-5))
// console.log(f.slice(-4,-5))

// //pop element 

// //push -- 

// //shift

// //unshift 

// //indexOf

// //includes

// //slice


// let fruits = ["mango","grapes","chiku"]

// //console.log(fruits[0])

// // for(let i = 0 ; i < 3 ; i++){ // 1 // 2 // 3
// //     console.log(fruits[i])   // 0   // 1 // 2
// // }

// let userInput = "mango"
// for(let i = 0 ; i < fruits.length;i++){
//     if(fruits[i] == userInput){
//         console.log('Fruit available')
//     }

// }
// //console.log(fruits.indexOf('chiku'))
// if(fruits.indexOf(userInput) >= 0){
//     console.log("Fruit available")
// }
// else{
//     console.log('Fruit not available')
// }

// if(fruits.includes(userInput)){
//     console.log('Fruit available')
// }
// else{
//     console.log('Fruit not available')
// }


// let j = [2000,1999,1989,2003]
// let ages = []

// //[21,22,31,18]

// for(let i = 0 ; i < j.length ; i++ ){
//     let age = 2021-j[i] //21
//     ages.push(age)
// }
// console.log(ages)



// let ages = [ 21, 22, 32, 18 ]
// //[21,22,32]

// let above = []

// for(let i = 0 ; i < ages.length ; i++){
//     if(ages[i]>18){
//         above.push(ages[i])
//     }
// }

// console.log(above)




// let k = [11,22,11]

// let sum = 0

// for(let i = 0 ; i < k.length ; i++){
//     sum = sum + k[i]
// }

// console.log(sum)


// // Avanti 
// // Sagar 
// // Sandip 
// // Pooja More
// // Kausar
// // Swapnali 
// // Sakshi Harde
// // Shushant 
// // Shan





// variable ??


//why variable?

//Bank  - 0 

// 100 


// let x = 10 
// console.log(x)
// x = 20 
// console.log(x)

//------------------

// const  r = 40 
// console.log(r)
// r = 50

// ---------------------


// Arithmetic 


let a = 10 
let b = 5 

console.log(a+b) // 15
console.log(a-b) // 5
console.log(a*b) // 50
console.log(a/b) // 2

let ba  = 45
let ab  = 44


console.log(ba+ab) // 15
console.log(ba-ab) // 5
console.log(ba*ab) // 50
console.log(ba/ab) // 2


// DRY  Donot  repeat yourself 
// keyword functionNme --- parameter
// function calculator(x,y){  // blocks
//     console.log(x+y)    
//     console.log(x-y)    
//     console.log(x*y)    
//     console.log(x/y)   
//     // statements

// }
// calculator(100,50)
// console.log('----------------------')
// calculator(200,100)



// function without parameter and without return 
function add(){
    console.log(5+5)
}
add()
add()
add()

// function with parameter and without return type
function sub(x,y){
    console.log(x-y)
}
sub(100,50)
sub(1000,50)

// function with parameter and with return 

// 100 ------- 100(show)

function mul(x,y){
    console.log(x*y)
    return x*y
}

let g = mul(12,13)
console.log(g)
console.log(g+100)