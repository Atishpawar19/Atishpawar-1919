//let oneLi = document.querySelector('li') // document
let liList = document.querySelectorAll('li')
let button = document.querySelector('button')
console.log(liList)
button.addEventListener('click', () => {

    for (let i = 0; i < liList.length; i++) {
        if (i % 2 !== 0) {
            liList[i].style.color = "green"
        }
        else {
            liList[i].style.color = "red"
        }

    }
    for (let i = 0; i < liList.length; i++) {
        liList[i].textContent = liList[i].textContent.toUpperCase()

    }

})

// for(let i = 0  ; i < liList.length ; i++){
//     // <li>Apple<li>
//     // console.log(liList[i].textContent)
//     // liList[i].style.color = "red"

//     if(i % 2 !== 0 ){
//         liList[i].style.color = "green"
//     }
//     else {
//         liList[i].style.color = "red"
//     }

// }
   // <li>Apple<li>

// for(let i = 0  ; i < liList.length ; i++){
//     liList[i].textContent =  liList[i].textContent.toUpperCase()

// }

// for(let i = 0  ; i < liList.length ; i++){
//     liList[i].textContent =  liList[i].textContent.toLowerCase()

// }


// let human = {
//     fullName:"chinmay"
// }
// human.fullName  = human.fullName.toUpperCase()