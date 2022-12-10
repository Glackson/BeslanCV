// // 1 Функиця
// // Function Declaration
// function greet(myName){
//     console.log('Привет - ', myName)
// }

// //Function Expression
// const greet2 = function greet2(myName){
//     console.log('Привет 2 - ', myName)
// }

// greet('Lena')
// greet2('Lena')


// console.log(typeof greet)

// console.dir(greet)

//2 Анонимные функции
// let counter = 0
// const interval = setInterval(function(){
//     if (counter === 5){
//         clearInterval(interval)//clearTimeout
//     }else{
//         console.log(++counter)
//     }
// }, 1000)




// 3 Стрелочные функции
// function greet(myName){
//     console.log('Привет - ', myName)
// }

// const arrow = (myName) => {
//     console.log('Привет - ', myName)
// }
// arrow('Beslan')


// const arrow2 = (myName) => console.log('Привет - ', myName)
// arrow2('Dezl')

// const now2 = num => {
//     return num**2
// }
// console.log(now2(5))



// 4 Параметры по умолчанию
// const sum = (a, b = 1) => a + b
// console.log(sum(11))

// function sumAll(...all) {
//     let result = 0
//     for(let num of all) {
//         result += num
//     }
//     return result
// }
// const res = sumAll(1,2,3,4,5,6,7)

// console.log(res)



// // 5 Замыкания
// function createMember(name){
//     return function(lastName){
//         console.log(name + lastName)
//     }
// }
// const logWithLastName = createMember('Beslan')
// console.log(logWithLastName)