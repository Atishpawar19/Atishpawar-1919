// let amol = {
//     fullName:"chinmaydeshpande",
//     age:34,
//     rollNo:12,
//     family:{
//         father:"Shirish Deshpande",
//         mother:"Kanchan Deshpande"
//     },
//     skills:["Python","Javascript","HTML","CSS"]

// }

// // Retrive values
// // Dot notation and bracket notation
// console.log(amol.family.mother)
// console.log(amol['family']['father'])

// // update
// amol.skills.push('Java')
// console.log(amol.skills)
// // adding new property

// amol.language = "Marathi"
// console.log(amol)

// // del
// delete amol.language
// console.log(amol)

// // --------------------------

// amol = {
//     fullName:"chinmaydeshpande",
//     age:34,
//     rollNo:12,
//     family:{
//         father:"Shirish Deshpande",
//         mother:"Kanchan Deshpande"
//     },
//     skills:["Python","Javascript","HTML","CSS"]

// }

// // let fn = amol.fullName
// // let age = amol.age
// // let lenSkills = amol.skills.length
// // console.log(a)

// chinmay = {
//     fullName:"chinmaydeshpande",
//     age:34,
//     rollNo:12
// }

// let {fullName , age , rollNo } = chinmay
// // console.log(fullName,age,rollNo)
// // console.log(chinmay)

// //custome name
// let {fullName:fn , age:ag , rollNo:rn } = chinmay
// console.log(fn,ag,rn)

// let obj = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }

// let {page:pg,per_page:per_page,support:sp,total:tl,data:dta} = obj

// //{repsonse,request}

// // Nested
// let poorva = {
//     id:1,
//     title:'My story',
//     fullName:"poorva vyas",
//     author:{
//         first:"j k",
//         lastname:"rolling"
//     }
// }

// //actual use

// let {id,author:{first,lastname}} = poorva
// console.log(id,first,lastname)

// // custom name

// let {id:idTwo,author:{first:fn2,lastname:ln2}} = poorva
// console.log(idTwo,fn2,ln2)

// // abhisha = {
// //     id:1,
// //     title:'My story',
// //     fullName:"abhisha ",
// //     skills:["python","java","javscript"]
// // }

// // Array destructuring

// let skills = ["python","java","javscript"]

// let [a,b,c] = skills
// console.log(a,b,c)

// abhisha = {
//     id:1,
//     title:'My story',
//     fullName:"abhisha ",
//     skills:["python","java","javscript"]
// }

// let {id:k,title:t,skills:[aa,bb]}= abhisha
// console.log(k,t,aa,bb)

// // ------------------->

// let arr = [1,2,[2,3],4,5]
// let [aaa,bbb,[ccc,ddd],eee,fff] = arr
// console.log(aaa,bbb,ccc,ddd,eee,fff)

// //--------------------------------->
// console.log(arr[2][arr[2].length-1])

// let kk = [22,3,4]
// console.log(kk[kk.length-1])

// //--------------------------------------

// arr2 = [1,2,[2,3],4,5]
// console.log(arr2[2][arr2[2].length-1])
// let [ab,bc,cd,de,ef,fg]= [1,2,[2,3],4,5].flat()

// -----------------------------------------------

// let names = ["chinmay","sameer","ramesh",{firstName:"chinmaya",lastName:"deshpande"}]
// let [a,b,c,{firstName,lastName}] = names
// console.log(firstName)
// console.log(lastName)

// let  humana = {
//     fullName:"chinmay deshpande",
//     skills:["python","javascript","css"],
//     family:{
//             father:"shirish",
//             mother:"kanchan"
//     }
// }

// let {fullName,skills:[skillOne,skillTwo,skillThree],family:{father,mother}} = humana
// console.log(fullName,skillOne,skillTwo,skillThree,father,mother)

// let  humana = {
//     fullName:"chinmay deshpande",
//     skills:[{age:23,roll:34},"javascript","css"],
//     family:{
//             father:"shirish",
//             mother:"kanchan"
//     }
// }
// let {skills:{age,roll}} = humana

//---------------------------------------->

//Spread operator

// let nums = [2,3,5,6,7,8,9,0]
// function add(a,b,c){
//     return a+b+c
// }

// let j = add(nums[0],nums[1],nums[2])
// console.log(j)

// let nums = [2,3,5,6,7,8,9,0]
// function add(a,b,c){
//     return a+b+c
// }

// let j = add(...nums)
// console.log(j)

// let transactions = [23,44,-55,-66,-77,55,66,77,88,99]

// let  newTransactions = transactions.slice(-5)
// function sumFiveTransaction(a,b,c,d,e){
//     return Math.abs(a)+Math.abs(b)+Math.abs(c)+Math.abs(d)+Math.abs(e)
// }
// console.log(sumFiveTransaction(...newTransactions))

// console.log(newTransactions.reduce((acc,el)=> Math.abs(el)+acc))

// rest operator

// function add(...arr){
//    return arr.reduce((acc,el) => acc + el)
// }
// console.log(add(3,4,5,6,7,8,8,9,9,6,4,4,4,5,6,8))

function add(a, ...arr) {
  console.log(a)
  console.log(arr.slice(0, a))
  console.log(arr.slice(-a))
}
add(3, 'amol', 'chinmay', 'sunil', 'shashank', 'shushant')

// spread operator applies on every iterator ?

// let [aaa,...ccc]= [1,2,3,4,5]
// console.log(ccc[0])

let ya = [12, 3, 4]
let yb = [33, 44, 55]

let r = [...ya, ...yb]
let [ra, ...bbb] = [...ya, ...yb]

//[ 12, 3, 4, 33, 44, 55 ]

console.log(ra)
console.log(bbb)

// object -----

let rone = {
  namev: 'rahul',
  age: 34,
  rollNum: 23,
}

// spread operator with obj

let { namev, age, rollNum } = rone

// rest operator with object
// let{namev,...cccc}= rone
// console.log(namev)
// console.log(cccc)

console.log(namev)
console.log(age)
console.log(rollNum)

// function add(...d){
//     console.lod(d)
// }
// add(12,3,4,5,6,6)

let jjj = [2, 3, 4, 5, 6, 7]
let rjj = [23, 5, 6, 7, 7, 889]

let raaaasss = [...jjj, ...rjj]
let [yuy, ...bnm] = [...jjj, ...rjj]

//object

let human = { namey: 5665, age: 4455 }
let family = { mother: 'kanchan', ageyy: 44 }

let iaaaa = { ...human, ...family }
let { namey, ...ggg } = { ...human, ...family }
console.log(ggg)
console.log(namey)

// spread operator with string

console.log([...'chinmay'])

let [ax, bx, ...abnn] = [...'chinmay']
console.log(ax)
console.log(abnn.join(''))

//--------------------------->

let h = [2, 3, 5]

// let t = h

// t[0] = 1000
// console.log(t)
// console.log(h)

let f = [...h]
f[0] = 3
console.log(f)
console.log(h)

// let obj = {age:23,t:344}

// let rnc = obj

// rnc['age'] = 6666

// console.log(rnc)
// console.log(obj)

let obj = { age: 23, t: 344 }
let rnc = { ...obj }
rnc['age'] = 6666
console.log(rnc)
console.log(obj)

let df = [1, 23, 4]
let ggggg = [...df]
for (let i = 0; i < df.length; i++) {
  ggggg.push(df[i])
}
console.log(df)

//------------------------------------------------------------
// short circuiting

// falsy values and truthy values

//|| ? :

if (0) {
  console.log('hell0')
}
