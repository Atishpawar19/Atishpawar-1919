


// //let firstName = "ninad"
// let amol = {

//     age:34,
//     firstName:"amolrao",
//     displayName:function(){
//         console.log(`My name is ${this.firstName}`)
//     }
// }


// let chinmay = {

//     age:37,
//     firstName:"chinmay",
//     displayName:function(){
//         console.log(`My name is ${this.firstName}`)
//     }

//}


// console.log(amol.age)
// console.log(amol.firstName)
// amol.displayName()

// let lastName = new String("Chinmay")
// let deshpande = "deshpande"
// console.log(lastName.toUpperCase())
// console.log(lastName.length)


// let names = ["chinmay","poorva","abhisha","ram"]
// let lastName = new Array(5)
// lastName[0] = "deshpande"
// lastName[1] = "vyas"
// lastName[2] = "burande"
// lastName[3] = "dani"
// lastName[4] = "hh"
// console.log(lastName)

// String  Array  Regex

// Person


class Person{

    constructor(age, firstName){
        this.firstName = firstName
        this.age = age

    }
    display(){
        console.log(`My name is ${this.firstName}`)
    }

}
let amol = new Person(23,"amol")
let chinmay = new Person(24,"chinmay")
//--------------------------------------
console.log(amol)
console.log(chinmay)


//-------------------------->

let students = new Array(2) //[amol,chinmay]
students[0] = amol
students[1] = chinmay

for(let i = 0 ; i < students.length ; i++ ){

    let obj = students[i]
    for(let key in obj){
        console.log(key , obj[key])
    }

}

// let regex1 = new RegExp("hello");
// let regex2 = /worlds/;
let regex2 = /python/i;
let rr  = "Hi i am to PYTHON and learning python"
let h = rr.search(regex2)
console.log(h)

let regex3 = /python/gi;
let rra  = "Hi i am to PYTHON and learning python"
let gg = rra.match(regex3)
console.log(gg)

let dd = rra.replace(regex3,"js")
console.log(dd)



// ------------------------>


let a = ["new am new to javascript"]
let b = []
let n = a[0].split(" ")
for(let i = 0 ; i < n.length ; i++){
    let word = n[i]
    let revString = revWord(word)
    b.push(revString)
}
console.log(b.join(' '))


function revWord(word){
    let revString = " "
    for(let i = 0 ; i < word.length ; i++){
        revString = word[i] + revString
    }
    return revString

}





























// //let firstName = "ninad"
// let amol = {

//     age:34,
//     firstName:"amolrao",
//     displayName:function(){
//         console.log(`My name is ${this.firstName}`)
//     }
// }

// let chinmay = {

//     age:37,
//     firstName:"chinmay",
//     displayName:function(){
//         console.log(`My name is ${this.firstName}`)
//     }

//}


let ia = [23,33,44,55,67,33,44,66]
let j = []
// [23,33,44,55,67,66]

// i.indexOf(3) //-1
// i.indexOf(55)// 3

// for(let i = 0 ; i < ia.length;i++){
//     if(j.indexOf(ia[i]) == -1){
//         j.push(ia[i])     
//     }
// }
// console.log(j)

// for(let i = 0 ; i < ia.length;i++){
//     if(!j.includes(ia[i])){
//         j.push(ia[i])     
//     }
// }
// console.log(j)


// let arr = [ 15,66,88,12,66,57,88,15]
// let unique =  arr.filter((el,index,arrey)=>{
    
//     if(arrey.indexOf(el)== index){
//          return true;
//     }
// })
// console.log(unique)


//let ha = [33,44,55,66,88,44,66,77,33,55]
// // filter action ---  filters
// // return array 
// let rrr = ha.filter(function(el,index,arr){
//     //console.log(el,index,arr)
//     //return el > 40
//     return arr.indexOf(el) === index

// })
// console.log(rrr)

// let rrr = ha.map(function(el,index,arr){
//     //console.log(el,index,arr)
//     //return el > 40
//     //return arr.indexOf(el) === index

//     if(el == 66){
//         return index
//     }

// })
// console.log(rrr)

































console.log("abc".startsWith('a'))
console.log("abc".endsWith('c'))










