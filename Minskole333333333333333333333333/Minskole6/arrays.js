let age = 10 
console.log(typeof age)

let ages = '10'
console.log(typeof ages)

let a = true
console.log(typeof a)

let ab = [2,3,4,5]    // []
console.log(typeof ab)

//------------------------------>


// [2,3,5,6]


// objects ----- properties and methods

//             0          1        2      3
let names = ["chinmay","poorva","mayuri","ram"]

console.log(names[0])
console.log(names.length)
console.log(names[names.length-1])


// for loop 

// for(let i = 0 ; i < names.length ; i++){ //4
//     console.log(i) // 0 // 1 // 2 // 4
// }

for(let i = 0 ; i < names.length ; i++){ //4
    console.log(i) // 0 // 1 // 2 // 4
    console.log(names[i])
}


//----------------------------------->
// 23 
let fruits = ["apple","banana","mango","grapes"]

let r = fruits.push("chiku")
console.log(fruits)
console.log(r)

//[ 'apple', 'banana', 'mango', 'grapes']
let rrr = fruits.pop()
console.log(fruits) //
console.log(rrr) // 

// shift 
//[ 'banana', 'mango', 'grapes']
let hhh = fruits.shift()
console.log(fruits)
console.log(hhh)    // apple

// unshift
// [ 'banana', 'mango', 'grapes' ]
let yyy = fruits.unshift('papaya')
console.log(yyy) // 4
console.log(fruits) //['apurva','banana', 'mango', 'grapes' ]


// Method -- action 
// return 


// pop --- last element --- same element 
// push ---- last element ---- new length
// shift --- first element --- firstelment 
// unshift ---- add ------ new length

let vegetable = ["tomato","cabbage","onion","carrot"]
let j = vegetable.indexOf('carrot')
console.log(j)
console.log(typeof j)


let jj = vegetable.indexOf('potato')
console.log(jj)












