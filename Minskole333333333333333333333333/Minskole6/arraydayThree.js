let x = 10 
console.log(x)

//              0         1     2      3
let names = ["chinmay", "ram","sham","poorva"]

// Index starts with zero 
// length - number of elements

console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names.length)

// for loop 

for(let i = 0 ; i < names.length ; i++){
    //console.log(i)
    console.log(names[i])

}

// ---------------------------------------> 

//23 methods


//objects   - 

//human --- properties and methods

//properties  - age , color 
// methods - walk() , talk()

// Javascript - everything is object 


// Array - object 

// property - length
// methods - 23


// Method ---- perform action 
// Returns something 


let fruits = ["apple","mango","grapes"]

// push

// action  - add the element to the last
// return type - return the new length of array

let a = fruits.push("chiku")
console.log(a)

//["apple","mango","grapes","chiku"]


// pop
// action  -  removes the element from the last 
// return type - return the removed element

let b = fruits.pop()
console.log(b)
console.log(fruits)


// shift
// action  -  removes the element from the first
// return type - return the removed element

// [ 'apple', 'mango', 'grapes' ]
let c = fruits.shift()
console.log(c)
console.log(fruits)


// unshift
// action  -  add the element at the beginning 
// return type - returns the new length of array

//[ 'mango', 'grapes' ]


let d = fruits.unshift('papaya')
console.log(d)
console.log(fruits)

// ------------------------------------>

// Return type
// pop --  returned removed element 
// shift -- returns the removed element 
// push - new length of array
// unshift - new length of the array

// ------------------------------------->


//indexof


// action  -  find the index of element in array 
// return type - if found returns index else return -1


      //         0       1      2
let animals = ["tiger","lion","zebra"]
let e = animals.indexOf("lion")
console.log(e)

let f = animals.indexOf("cat")
console.log(f)

// includes 
// action  -  find the element in array 
// return type - if found returns true else return false

let g = animals.includes("tiger")
console.log(g)

let h = animals.includes("cat")
console.log(h)


// concat 

let i = [2,3,4]
let j = [5,6,7]

let k = i.concat(j)
console.log(k)

let l = j.concat(i)
console.log(l)


// flat 
//         0            1          2
let m = [[11,22,33],[44,55,66],[77,88,99]]
console.log(m[0][0]) //11
console.log(m[1][2]) // 66
console.log(m[2][1]) // 88

let n = m.flat()
console.log(n)

// slice 

let o = [12,22,33,44,55,66,77]
// return array 

//   0      1   2      3      4     5     6
//  [ 12 ,  22,  33  , 44  ,  55  ,  66,  77]
//    -7   -6    -5    -4     -3     -2    -1

//o.slice(startposition,endposition(not included))

let p = o.slice(2,5)
console.log(p)

let q = o.slice(-6,5)
console.log(q)

// end point should be after starting point 
let r = o.slice(-3,-6)
console.log(r)

let s = o.slice(1)
console.log(s)

let t = o.slice(-4)
console.log(t)

o = [12,22,33,44,55,66,77]

u = o.reverse()
console.log(u)

//--------------------------------->
// -------------------------------------->

// forEach 

//             0          1      2      3

let namesa = ["chinmay","ram","sham","ramesh"]
console.log(namesa[0])
for(let i = 0 ; i < namesa.length; i++){ // i -> 1 --> 2

    console.log(i) // 0 // 1 // //2 // 3
    namesa[i]

}


//object array -- length  




//forEach 

// Method 
// Action
namesa = ["chinmay","ram","sham","ramesh"]
let rrr = namesa.forEach(function(el,index,arr){
    console.log(el,index,arr)

})
console.log(rrr)


// map --
//loop over every element and action 
// return array 


let ages = [1990,1989,1988,1987,1986,1985,2002]

//[2021-1990,2021-1989,2021-1988,2021-1986,2021-1985,2021-2002]

let calculateAge = []

for(let i = 0 ; i <ages.length ; i++){
    let ggg = 2021-ages[i]
    calculateAge.push(ggg)
}

console.log(calculateAge)


let rrrr = ages.map(function(el,index,arr){
    return el > 33
})

console.log(rrrr)
console.log(calculateAge)

let above33 =[]


for(let i = 0 ; i < calculateAge.length;i++){
    //console.log(calculateAge[i])

    if(calculateAge[i] > 33){
        //console.log(calculateAge[i])
        above33.push(calculateAge[i])
    }

}
console.log(above33)

//filter -- filter out the element from the array

// return - array

// [
//     31, 32, 33, 34,
//     35, 36, 19
//   ]

let yyyy= calculateAge.filter(function(el,index,arr){
    return el > 33
})
console.log(yyyy)


let number = [1,2,3,3,4]
let sum = 0 
for(let i = 0 ; i < number.length ; i++){
    //console.log(number[i])
    sum = number[i]+ sum // 3
}

console.log(sum)

// 0 1 2 3
// a m o l

let rrrrr = number.reduce(function(acc,el,index,arr){
    return acc + el
},0)

console.log(rrrrr)


let aaaa = [1200,122,133,-12,-13]

//[-12,-13]

// let hhhh = aaaa.filter(function(el,index,arr){
//     return el < 0
// }).reduce(function(acc,el){

//     return acc + el

// },0)

// console.log(hhhh)


// --------------------------------------------->


// some   every 

//  18 ?


let age = [11,13,14,45,45,66]

//only one element should satisfy condition to return true

let klkl = age.some(function(el,index,arr){
    return el < 18
})

console.log(klkl)

// every element should satisfy condition to return true
let klkla = age.every(function(el,index,arr){
    return el < 18
})

console.log(klkla)

//----------------------------------------------------->
//let amol = ["amol","rao",20,23]


//console.log(amol[1])

// object 

// object does not stores the value by index

let amol = {

    firstName:"amool",
    lastName:"rao",
    age:12,
    rollNo:34

}


//console.log(amol[0])
// Retrive the value from the object 


// objecName.propertyName

console.log(amol.firstName)
console.log(amol.age)


// Bracket notation

console.log(amol['firstName'])
console.log(amol['age'])

//------------------------------>

// udapting the value 

amol.firstName = "chotu"
console.log(amol.firstName)
 
amol['firstName'] = "ram"
console.log(amol.firstName)

// -------------------------
//Adding the property to abject
amol.language = "Marathi"
console.log(amol)

// deleting the value 
delete amol.language
console.log(amol)


// retrive , update , add , delete

amol = {

    firstName:"am",
    lastName:"rao",
    age:12,
    rollNo:34

}

// 100 

//console.log(amol.firstName)

// dot notation does not work inside a loop 

for(property in amol){
    console.log(property,amol[property])
}


//------------------>
let students = [
    {

        firstName:"chinmay",
        age:23

    },
    {

        firstName:"amol",
        age:25

    }

]
// console.log(students[1].age)
// console.log(students[1]['age'])


// for(let i = 0 ; i < students.length ; i++){
//     //console.log(students[i])
//     let obj = students[i]
//     for(key in obj){
//         console.log(key, obj[key])
//     }

// }

// find findindex

// let ghghgh = students.find(function(el,index,arr){
//     return el.age == 23
// })
// console.log(ghghgh)


// let ghghgha = students.findIndex(function(el,index,arr){
//     return el.firstName == "amol"
// })
// console.log(ghghgha)





















