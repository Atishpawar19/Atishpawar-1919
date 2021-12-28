// let names = ["chinmay","poorva","abhisha","mayuri"]
// // Arrays also stores the value by index 
// console.log(names[0])
// console.log(names[2])

// // for loop to print every element 
// console.log('------------------------')


// for(let i = 0 ; i < names.length ; i++){
//     console.log(names[i])
// }
// console.log(names.length)


// for(let i = names.length-1 ; i >= 0  ; i--){
//     console.log(names[i])
// }

// // push
// names = ["chinmay","poorva","abhisha","mayuri"]
// let h = names.push("ninad")
// console.log(h)
// console.log(names)

// //Method
// // Action 
// // Return 

// //pop

// let g = names.pop()
// console.log(g)
// console.log(names)

// // push pop
// let c  =  names.unshift("ram")
// console.log(c)
// console.log(names)


// //shift

// let ha = names.shift()
// console.log(ha)
// console.log(names)


//  //action // push('a') pop() unshift('b') shift()
//  //return something//new length  ele     newlen      ele


//  // includes

// let fruits = ["mango","grapes","banana","papaya"]
// let r = fruits.includes('mango')
// console.log(r)

// //         0         1      2         3
// fruits = ["mango","grapes","banana","papaya"]
// //          -4       -3       -2       -1

// let gg = fruits.indexOf("grapes")
// console.log(gg)

// // push pop shift unshift indexof includes


// // let n = [1,3,44,55]
// // console.log(n.replace(1,99))

// console.log(fruits.slice(1,4))
// console.log(fruits.slice(2,3))
// console.log(fruits.slice(-4,2))
// console.log(fruits.slice(-2,-4))


// // fruits = ["mango","grapes","banana","papaya"]

// // // let haaa =[11,2,3,4,5] 
// // // let hsss = haaa.sort()
// // // console.log(hsss)

 

// // // let b =100

// // // console.log(b)

// // let j = ["poorva","amol","ram"]
// // j.sort()
// // console.log(j)



// // // let ja = [12,33,133,133,1333]
// // // ja.sort()
// // // console.log(ja)

// // // ja = [12,33,55,66,8,9]

// // // // 8,9,12,33,55,66

// // // // let rnn = []

// // // for(let i = 0 ; i < ja.length ; i++){
// // //     // if(ja[i] > ja[i+1]){
// // //     //     ja[i] = ja[i+1]
// // //     // }
// // //     for(let j = 1 ; j < ja.length ; j++ ){
// // //         if(ja[i] > j[i]){
// // //             ja[i] = j[i]
// // //         }
// // //     }

// // // }

// // // console.log(ja)


// // let birthyear = [2000,1999,2001,1998]
// // // [21,22,20,23]

// // let years = []

// // for(let i = 0 ; i < birthyear.length ; i++){
// //     years.push(2021-birthyear[i])
// // }

// // console.log(years)


// // // push pop shift unshift indexOf ,includes,slice,sort
// // // map


// // birthyear = [2000,1999,2001,1998]

// // // let fgf = birthyear.map(function(el,index,arr){
// // //     console.log(el,index,arr)
// // // })

// // let fgf = birthyear.map(function(el,index,arr){
// //     return 2021 - el
// // })
// // console.log(fgf)

// // //birthyear.push('harry')

// // let hhhh = birthyear.map(function(el,index,arr){
// //        return 2021 - el
// // })

// // console.log(hhhh)

// // ///-------------------------------------

// // let hy = [23,24,27,88,99,12,33,14,14] 
// // let belowEight = []
// // for(let i = 0 ; i < hy.length;i++){
// //         if(hy[i] > 18){
// //             belowEight.push(hy[i])
// //         }
// // }
// // console.log(belowEight)


// // let rdrd = hy.filter(function(el,index,arr){
// //     return el > 18
// // })
// // console.log(rdrd)


// // // sum --------->

// // let sumA = [1,23,34,44]
// // let sum = 0 

// // for(let i = 0 ; i < sumA.length ; i++){
// //     sum = sumA[i] + sum
// // }
// // console.log(sum)

// // //reduce

// // let uuu = sumA.reduce(function(acc,el,index ,arr){
// //     return acc + el
// // },0)
// // console.log(uuu)



// // let transactions  = [2000,23,-300,4000,-900]


// // let depoist = transactions.filter(function(el,index,arr){
// //     return el > 0  
// // })

// // //[2000,23,4000]

// // let totalDepoist = depoist.reduce(function(acc,el,index,arr){
// //         return el + acc
// // },0)



// // //[2000,23,-300,4000,-900]
// // let withdrawl = transactions.filter(function(el,index,arr){
// //     return el < 0  
// // })
// // //[-300,-900]

// // let totalWithdrawl = withdrawl.reduce(function(acc,el,index,arr){
// //         return el + acc
// // },0)

// // console.log(totalWithdrawl)


// // // map fitler reduce

// // // find()


// // let nnnn = ["amol","chinmay","amit","rama","ankita"]
// // // console.log(nnnn[1].length)


// // // let rrrrr = nnnn.find(function(el,index,arr){
// // //     return el.length > 4
// // // })
// // // console.log(rrrrr)


// // // findIndex

// // let rrrrr = nnnn.findIndex(function(el,index,arr){
// //     return el.length > 4
// // })
// // console.log(rrrrr)

// // //  flat

// // //push  pop  indexOf shif unshit map reduce filter sort slice
// // //flat 
// // let a = [[1,2,3],[33,44,55]]
// // console.log(a[0])
// // console.log(a[1])

// // let hj = a.flat()
// // console.log(hj)

// // // every ,some  - boolean value (true or value )

// // // let dn = [22,33,44,55,66] // true   >= 18 (every)

// // // let bn = [22,33,44,55,66] // true   >= 60  (some)

// // let snn = [19,33,44,55,66]
// // let ghg =snn.every(function(el,index,arr){
// //     return el > 18
// // })
// // console.log(ghg)

// // // some 
// // let snna = [7,12,11,17,15]
// // let ghgh = snna.some(function(el,index,arr){
// //     return el > 18
// // })
// // console.log(ghgh)

// // // revered
// // let go = [12,44,55,66,77,76,78]
// // let ggg = go.reverse()
// // console.log(ggg)

// // // fill 
// // let gba = [1,2,3,4,a,a,a,a,a,a,a]

// // // [1,2,3,4,5,5,5,5,5,5,5]

// // let oo = gba.fill(5,4,gba.length)
// // console.log(oo)

// // let faa = [1,2,3,4]
// // // fill('a',startposition,endposition)
// // console.log(faa.fill('a',2,4))

// // //-------------------------------->
// // let jay  =  [1,2,3,4,5,6,7,8]
// // let rrr = jay.splice(2,2,'a','b')
// // //jay.splice('index','deleNo','reP','reP','reP')
// // console.log(jay)
// // console.log(rrr)

// // // forEach

// // // map --- array

// // // filter - array 

// // // reduce - 1 single value 

// // // forEach 

// // let nam = ["chinmay","poorva","ram","raj"]
// // let rrra = nam.forEach(function(el,index,arr){
// //     console.log("welcome "+ el)
// // })
// // console.log(nam)

// // nam = ["chinmay","poorva","ram","raj",1,true]
// // console.log(nam[0])
// // console.log(nam.join(" "))


// // let daa = [1,3,5]
// // let eaa = [4,5,6]

// // //daa.concat(eaa)  // [1,3,5,4,5,6]

// // let hhhha = eaa.concat(daa) // [4,5,6,1,35]
// // console.log(hhhha)





// let h = ["chinmay","poorva","abhisha"]
// console.log(h[1])
// console.log(h.length)


// // for loop

// // console.log(1)
// // console.log(2)
// // console.log(3)
// // console.log(4)
// // console.log(5)
// // console.log(6)
// // console.log(7)
// // console.log(8)
// // console.log(9)
// // console.log(10)



// // for(intialization;conditionCheck;increment/decrement){
// //     // statement 
// // }

// console.log('---------------')

// for(let i = 1 ;i <= 10;i++){ // i = 1

//     console.log(i) // 0 , 1

// }


// h = ["chinmay","poorva","abhisha"]
// console.log(h[0])
// for(let i = 0 ;i < 3 ;i++){ // i = 1
//     //console.log(i) // 0 , 1 , 2
//     console.log(h[i])
// }
//  console.log("--------------------")

// for(let i = h.length - 1 ;i >=0  ;i--){ // i = 1
//     //console.log(i) // 0 , 1 , 2
//     console.log(h[i])
// }


// // -------------------------------------------------->

// //1998

// //console.log(2021 - 1998)


// let years = [2000,2008,2007,2001]

// // [21,13,14,20]

// // let ages = []
// // for(let i = 0 ; i < years.length ; i++){
// //     let age = 2021 - years[i] // 21
// //     ages.push(age)
// // }
// // console.log(ages)

// let ages = [ 21, 13, 14, 20 ]
// let above20 = []

// //[21,20]

// for(let i = 0 ; i < ages.length ; i++){
//     if(ages[i] >= 20){
//         above20.push(ages[i])
//     }
// }
// console.log(above20)


// let nu = [22,33,44]
// let sum = 0 

// for(let i = 0 ; i < nu.length ; i++){
//     sum = sum + nu[i]  

// }
// console.log(sum)


let ew = [2000,2004,2005,2006]
let ages = []

for(let i = 0 ; i < ew.length ; i++){
    let age = 2021 - ew[i]
    ages.push(age)
}
console.log(ages)


let vba = ew.map(function(el,index,arr){
    return 2021 - el
})
 
console.log(vba)

let agess = [ 21, 17, 16, 15 ]

let above15 =[]
//[21,17,16]

for(let i = 0 ; i < agess.length ; i++){
    if(agess[i] > 15){
        above15.push(agess[i])
    }
}
console.log(above15)


let ggg = agess.filter(function(el,index,arr){
    return el > 15
})
console.log(ggg)


// Reduce

let af = [1,2,3,45,6]
let  sum = 0 
for(let i = 0 ; i < af.length ; i++){
    sum = sum + af[i]
}
console.log(sum)


let ghgh = af.reduce(function(acc,el,index,arr){
    return acc + el // 1
},0)
console.log(ghgh)


// forEach 

let names = ["amol","amit","anand"]

let rrrrr = names.forEach(function(el,index,arr){
    console.log('welcome '+ el)
})

console.log(rrrrr)


// map -- array
// filter -- array 
// reduce -- sigle value
// forEach --














