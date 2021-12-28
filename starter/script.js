'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

// js
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  // 'stw'
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  //username:ss
};

const accounts = [account1, account2, account3, account4];
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
let currentAccount ;

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };


// steps :- 

// created the userName 

function createUserNames(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .split(' ')
      .map(function (acc) {
        return acc[0]
      })
      .join('')
      .toLowerCase()
  })

}
createUserNames(accounts)
//console.log(accounts)


//  Event handlers

btnLogin.addEventListener('click', function (event) {

  event.preventDefault()
  console.log(event.target.tagName)
  let userInputUsername = inputLoginUsername.value
  let userInputPassword = inputLoginPin.value
  // console.log(userInputUsername)
  // console.log(userInputPassword)

  currentAccount  = accounts.find(function (el) {
   /* 
    console.log(el.pin)
    console.log(el.username)
    console.log(userInputUsername)
    console.log(userInputPassword)
    */
    return el.username === userInputUsername && el.pin === Number(userInputPassword)
  })
  if(currentAccount){
    containerApp.style.opacity = "100";
  }
  /* update the  welcome message*/

  /* 
    "chinmay deshpande".split(' ')//["chinmay","deshpande"][0]
  */
  labelWelcome.textContent = `Welcome , ${currentAccount.owner.split(' ')[0]} !`
  inputLoginUsername.value = " "
  inputLoginPin.value = " "


})



































// function CreateUserName(accounts) {
//   accounts.username = account4.owner
//     .split(' ') // return array 
//     .map(function (el) { // return array
//       return el[0]
//     })
//     .join('')
//     .toLowerCase()
// }

// CreateUserName(account4)





// CreateUserName(account4)
// console.log(account4)
